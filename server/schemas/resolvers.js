const { Question, User, Category } = require('../models');
const {signToken, AuthenticationError} = require('../utils/auth');

const resolvers = {

  Query: {

    //All categories
    categories: async () => {
      return await Category.find({}).populate('setOfQuestions')
    },

    //All questions
    questions: async () => {
      return await Question.find({})
    },

    // Category by id
    category: async (parent, {categoryId}) => {
      return await Category.findOne({name: categoryId}).populate('setOfQuestions')
    },

    //User by id
    user: async (parent, args) => {
      return await User.findById(args.id).populate('scores')
    },
  },
  //end of Queries

  Mutation: {

    //Adds User
    addUser: async (parent, { username, email, password}) => {

      const user = await User.create({ username, email, password});
      const token = signToken(user);

      return {token, user};
    },

    //Handles login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({email});

      if(!user){
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw){
        throw  AuthenticationError
      }

      const token = signToken(user);
      return{token, user}
    },

    
    addScore: async (parent, {id, score}) => {
      return User.findOneAndUpdate(
        {_id: id},
        {$addToSet: {scores: score},},
        {new:true}
      );
    },

    submitAnswers: async (parent, {Answers}) => {
      // count number of, correct and incorrect
      
      let correct = 0
      for (newAnswer of Answers){
        let questionCount = 1
        const id = newAnswer.question
        const answerSheet = await Question.findById({_id: id})
        if(newAnswer.answer === answerSheet.answer){
           correct++
        }
        questionCount++ 
      }
     

      return {questionCount, correct}
    }
  }
};


//question find by id

module.exports = resolvers
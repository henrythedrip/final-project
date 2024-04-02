const { Question, User, Category } = require('../models');

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
    category: async (parent, args) => {
      return await Category.findById(args.id).populate('setOfQuestions')
    },

    //User by id
    user: async (parent, args) => {
      return await User.findById(args.id).populate('scores')
    },
  },
};
//end of Queries

module.exports = resolvers
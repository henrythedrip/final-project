const typeDefs = `
  type Category {
    _id: ID
    name: String
    setOfQuestions: [Question]
  }

  type Question {
    _id: ID
    question: String
    category: Category
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    scores: [Score]

}

type Score {
    _id: ID
    category: Category
    questionCount: Int
    correct: Int
    
}

type Auth {
  token: ID
  profile: User
}


input QuestionInput {
  _id: ID!
  question: String!
  category: CategoryInput
}

input CategoryInput {
  _id: ID!
  name: String!
  questions: [QuestionInput]
}

input ScoreInput {
  _id: ID!
  category: [CategoryInput]
  questionCount: Int!
  correct: Int!
  
}

input Answers{
  question: ID!
  answer: Boolean!
}

  type Query {
  categories: [Category]
  questions: [Question]
  category(categoryId: String!): Category
  user(id: ID!): User
  }

  type Mutation {
    addUser(username:String!, email:String!, password:String!): Auth
    login(email:String!, password: String!): Auth
    addScore(id: ID!, score:[ScoreInput]!): User
    submitAnswers(Answers:[ Answers ]!):Score
  }
`;


module.exports = typeDefs;

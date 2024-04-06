const typeDefs = `
  type Category {
    _id: ID
    name: String
    questions: [Question]
  }

 input CategoryInput {
    _id: ID
    name: String
    questions: [QuestionInput]
  }

  type Question {
    _id: ID
    questionBody: String
    answer: Boolean
    category: Category
  }

  input QuestionInput {
    _id: ID
    questionBody: String
    answer: Boolean
    category: CategoryInput
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
    category: [Category]
    score: Int
    
}

input ScoreInput {
  _id: ID
  category: [CategoryInput]
  score: Int
  
}

input Answers{
  question: ID!
  answer: Boolean!
}
type Auth {
  token: ID!
  profile: User
}


  type Query {
  categories: [Category]
  questions: [Question]
  category(id: ID!): Category
  user(id: ID!): User
  }

  type Mutation {
    addUser(username:String!, email:String!, password:String!): Auth
    login(email:String!, password: String!): Auth
    addScore(id: ID!, score:ScoreInput): User
    submitAnswers([ Answers ]):Int
  }
`;


module.exports = typeDefs;

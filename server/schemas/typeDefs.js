const typeDefs = `
  type Category {
    _id: ID
    name: String
    questions: [Question]
  }

  type Question {
    _id: ID
    questionBody: String
    answer: Boolean
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
    category: [Category]
    score: Int
    
}


  type Query {
  categories: [Category]
  questions: [Question]
  category(id: ID!): Category
  user(id: ID!): User
  }

  type Mutation {
addScore(id: ID!, score:Score): User
  }
`;


module.exports = typeDefs;

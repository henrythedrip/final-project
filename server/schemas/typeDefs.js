const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
  }

  type Query {
    question(questionId: ID!): Question
    questionsByCategory(categoryId: ID!, difficulty: String): [Question]!
    categories: [Category]!
  }

  type Mutation {
    addQuestion(questionBody: String!, answer: Boolean!, categoryId: ID!): Question
    removeQuestion(questionId: ID!): Question
    addCategory(name: String!): Category
    removeCategory(categoryId: ID!): Category
  }
`;

module.exports = typeDefs;

const { Question, User, Category } = require('../models');

const resolvers = {
    Query: {
      question: async (_, { questionId }) => {
        return await Question.findById(questionId);
      },
      questionsByCategory: async (_, { categoryId }) => {
        return await Question.find({ category: categoryId });
      },
      categories: async () => {
        return await Category.find();
      },
    },
    Category: {
      questions: async (category) => {
        return await Question.find({ category: category._id });
      },
    },
    Question: {
      category: async (question) => {
        return await Category.findById(question.category);
      },
    },
  };

module.exports = {
    Question,
    User,
    Category,
}
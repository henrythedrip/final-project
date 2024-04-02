const { Question, User, Category } = require('../models');

const resolvers = {
    Query: {
      categories: async () => Category.find(),
      questions: async (parent, {category, name}) => {
        const params = {};

        if (category) {
          params.category = category;
        }

        return Question.find(params);
      },
      AllQuestions: async () => Question.find(),

      questionsByCategory: async (_, { categoryId }) => {
        return await Question.find({ category: categoryId });
      },
      categories: async () => {
        return await Category.find();
      },
      },
  
    };
  //   Category: {
  //     questions: async (category) => {
  //       return await Question.find({ category: category._id });
  //     },
  //   },
  //   Question: {
  //     category: async (question) => {
  //       return await Category.findById(question.category);
  //     },
  //   },
  // };

module.exports = resolvers
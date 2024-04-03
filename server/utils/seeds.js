const fs = require('fs');
const path = require('path');
const Category = require('../models/Categories');
const Question = require('../models/Questions');

const connectDB = require('../config/connection');
const animalJson = require('./animalQuestions.json');
const deathJson = require('./deathQuestions.json');
const foodJson = require('./foodQuestions.json');
const gameJson = require('./gameQuestions.json');
const generalJson = require('./generalQuestions.json');
const historyJson = require('./historyQuestions.json');
const lawJson = require('./lawQuestions.json');
const sportsJson = require('./sportsQuestions.json');
const categoryJson = require('./categories.json');

connectDB.once('open', async () => {
  
      
      await Category.insertMany(categoryJson);
    await Question.insertMany(animalJson);
    await Question.insertMany(deathJson);
    await Question.insertMany(foodJson);
    await Question.insertMany(gameJson);
    await Question.insertMany(generalJson);
    await Question.insertMany(historyJson);
    await Question.insertMany(lawJson);
    await Question.insertMany(sportsJson);

  
    console.log('Database seeded successfully');
      process.exit(0);
    });

   



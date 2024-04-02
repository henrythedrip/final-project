const fs = require('fs');
const path = require('path');
const Category = require('../models/Categories');
const Question = require('../models/Questions');

const connectDB = require('../config/connection');
const animalJson = require('./animalQuestions.json');
const deathJson = require('./deathQuestions.json');

    connectDB.once('open', async () => {

      await Question.insertMany(animalJson); 
      await Question.insertMany(deathJson);

      console.log('Database seeded successfully');
      process.exit(0);
    });

   



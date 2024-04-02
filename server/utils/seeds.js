const fs = require('fs');
const path = require('path');
const Category = require('../models/Categories');
const Question = require('../models/Questions');

function readJSONFilesFromDirectory() {
  const directory = path.dirname(__filename);
  const files = fs.readdirSync(directory);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent);
    });
}

async function seedDataFromJSON() {
  try {
    const categories = readJSONFilesFromDirectory();

    for (const category of categories) {
      const { name, questions } = category;

      const seededCategory = await Category.findOneAndUpdate(
        { name }, 
        { name }, 
        { upsert: true, new: true } 
      );

      if (questions && questions.length > 0) {
        const questionObjects = questions.map(question => ({
          ...question,
          category: seededCategory._id
        }));
        await Question.insertMany(questionObjects);
      }
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}



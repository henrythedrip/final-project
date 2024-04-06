//calls for models and connection
const { Category, Question } = require("../models");
const connectDB = require("../config/connection");

//Json call
const categoryJson = require("./categories.json");

//call for function and data from data.js
const { questionConnections,
  animalData,
  historyData,
  deathData,
  foodData,
  gameData,
  generalData,
  lawData,
  sportsData } = require('./data');

  //database connect error
connectDB.on('error', (err) => err);

  //database connect
connectDB.once("open", async () => {

  //drops collections if they exist
  let categoryCheck = await connectDB.db.listCollections({ name: 'categories' }).toArray();
  if (categoryCheck.length) {
    await connectDB.dropCollection('categories')
  }
  let questionCheck = await connectDB.db.listCollections({ name: 'questions' }).toArray();
  if (questionCheck.length) {
    await connectDB.dropCollection('questions')
  }

  //makes Category documents
  const categories = await Category.insertMany(categoryJson);

  //sends categories to data.js and compiles the questions
  questionConnections(categories)

//Question documents create
  const animals = await Question.insertMany(animalData);
  const history = await Question.insertMany(historyData);
  const death = await Question.insertMany(deathData);
  const food = await Question.insertMany(foodData);
  const game = await Question.insertMany(gameData);
  const general = await Question.insertMany(generalData);
  const law = await Question.insertMany(lawData);
  const sports = await Question.insertMany(sportsData);

//connects category to questions by _id
  for (newAnimal of animals) {
    const tempCategory = categories[0]
    tempCategory.setOfQuestions.push(newAnimal._id);
    await tempCategory.save();
  }

  for (newHistory of history) {
    const tempCategory = categories[1]
    tempCategory.setOfQuestions.push(newHistory._id);
    await tempCategory.save();
  }

  for (newDeath of death) {
    const tempCategory = categories[2]
    tempCategory.setOfQuestions.push(newDeath._id);
    await tempCategory.save();
  }

  for (newFood of food) {
    const tempCategory = categories[3]
    tempCategory.setOfQuestions.push(newFood._id);
    await tempCategory.save();
  }

  for (newGame of game) {
    const tempCategory = categories[4]
    tempCategory.setOfQuestions.push(newGame._id);
    await tempCategory.save();
  }

  for (newGeneral of general) {
    const tempCategory = categories[5]
    tempCategory.setOfQuestions.push(newGeneral._id);
    await tempCategory.save();
  }

  for (newLaw of law) {
    const tempCategory = categories[6]
    tempCategory.setOfQuestions.push(newLaw._id);
    await tempCategory.save();
  }
  
  for (newSports of sports) {
    const tempCategory = categories[7]
    tempCategory.setOfQuestions.push(newSports._id);
    await tempCategory.save();
  }

  console.log("Database seeded successfully");
  process.exit(0);
});

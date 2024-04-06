//Json calls
const animalJson = require("./animalQuestions.json");
const deathJson = require("./deathQuestions.json");
const foodJson = require("./foodQuestions.json");
const gameJson = require("./gameQuestions.json");
const generalJson = require("./generalQuestions.json");
const historyJson = require("./historyQuestions.json");
const lawJson = require("./lawQuestions.json");
const sportsJson = require("./sportsQuestions.json");

//data arrays
const animalData = [];
const deathData = [];
const foodData = [];
const gameData = [];
const generalData = [];
const historyData = [];
const lawData = [];
const sportsData = [];

//compiles question data
const questionConnections = (categories) => {
    //animal
    for (let i = 0; i < animalJson.length; i++) {
        const question = animalJson[i].question
        const answer = animalJson[i].answer
        const category = categories[0]._id
        animalData.push({
            question,
            answer,
            category
        })
    }

    //history
    for (let i = 0; i < historyJson.length; i++) {
        const question = historyJson[i].question
        const answer = historyJson[i].answer
        const category = categories[1]._id
        historyData.push({
            question,
            answer,
            category
        })
    }

    //death
    for (let i = 0; i < deathJson.length; i++) {
        const question = deathJson[i].question
        const answer = deathJson[i].answer
        const category = categories[2]._id
        deathData.push({
            question,
            answer,
            category
        })
    }

    //food
    for (let i = 0; i < foodJson.length; i++) {
        const question = foodJson[i].question
        const answer = foodJson[i].answer
        const category = categories[3]._id
        foodData.push({
            question,
            answer,
            category
        })
    }

    //game
    for (let i = 0; i < gameJson.length; i++) {
        const question = gameJson[i].question
        const answer = gameJson[i].answer
        const category = categories[4]._id
        gameData.push({
            question,
            answer,
            category
        })
    }

    //general
    for (let i = 0; i < generalJson.length; i++) {
        const question = generalJson[i].question
        const answer = generalJson[i].answer
        const category = categories[5]._id
        generalData.push({
            question,
            answer,
            category
        })
    }

    //law
    for (let i = 0; i < lawJson.length; i++) {
        const question = lawJson[i].question
        const answer = lawJson[i].answer
        const category = categories[6]._id
        lawData.push({
            question,
            answer,
            category
        })
    }

    //sports
    for (let i = 0; i < sportsJson.length; i++) {
        const question = sportsJson[i].question
        const answer = sportsJson[i].answer
        const category = categories[7]._id
        sportsData.push({
            question,
            answer,
            category
        })
    }
}
//function end

//exports all data
module.exports = {
    questionConnections,
    animalData,
    historyData,
    deathData,
    foodData,
    gameData,
    generalData,
    lawData,
    sportsData
}
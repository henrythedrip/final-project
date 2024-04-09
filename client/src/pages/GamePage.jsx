import React from "react";
import GameItem from "../components/GameItem";
import GameWindow from "../components/GameWindow";
import { useState, useEffect } from "react";
import { USER_ANSWERS } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SCORE } from "../utils/mutations";

const GamePage = () => {

    const [gameId, setGameId] = useState('animal')
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [scoreSubmit, setScoreSubmit] = useState([]);
    const [scoreValue, setScoreValue] = useState(null);

    const [submitAnswers] = useMutation(USER_ANSWERS);

    // for picking category
    const [category, setCategory] = useState(null);
    console.log(userAnswers.length, 'banana')
    function clickHandler(e) {
        let answer = true;
        setCurrentQuestion(currentQuestion + 1)
        const question = localStorage.getItem('question');
        if (e.target.value === 'true') {
            answer = true;
        } else { answer = false; }

        if (userAnswers.length === 10) {
            endGame()
        }
        console.log(userAnswers);
        return setUserAnswers([
            ...userAnswers,
            { question: question, answer: answer }
        ]);

  function chooseCategory(category) {
    // console.log(category)
    switch (category) {
      case "animal":
        setCategory("Animals");
        console.log(category);
        break;

      case "death":
        setCategory("Death");
        console.log(category);
        break;

      case "food":
        setCategory("Food");
        console.log(category);
        break;

      case "game":
        setCategory("Game");
        console.log(category);
        break;

      case "general":
        setCategory("General");
        console.log(category);
        break;

      case "history":
        setCategory("History");
        console.log(category);
        break;

      case "law":
        setCategory("Law");
        console.log(category);
        break;

      case "sports":
        setCategory("Sports");
        console.log(category);
        break;
    }

    console.log('what', userAnswers.question)
    const endGame = async () => {
        try {
            const response = await submitAnswers({
                variables: { answers: userAnswers }
            })
            if (!response) {
                console.log('no score')
            }
            const score = await response.data.submitAnswers
            console.log(score, 'wbft')
            setScoreSubmit(score)
            setCategory(null)
            setScoreValue('score')
        } catch (err) { console.error(err) }
    }
    const scoreRender = () => {
        return <div>
            <h2>Number of Questions: {scoreSubmit.questionCount} Correct Questions: {scoreSubmit.correct}</h2>
        </div>
    }

    return (

        <div>
            <div className='game-header'>
                <h2>Choose A Category</h2>
            </div>
            <div className='game-selection'>
                <GameItem onClick={() => chooseCategory('animal')} gameName="Animals" />
                <GameItem onClick={() => chooseCategory('death')} gameName="Death" />
                <GameItem onClick={() => chooseCategory('food')} gameName="Food" />
                <GameItem onClick={() => chooseCategory('game')} gameName="Video Games" />
                <GameItem onClick={() => chooseCategory('general')} gameName="General" />
                <GameItem onClick={() => chooseCategory('history')} gameName="History" />
                <GameItem onClick={() => chooseCategory('law')} gameName="Law" />
                <GameItem onClick={() => chooseCategory('sports')} gameName="Sports" />
            </div>
            <div className='game-window'>
                <p className='time'></p>
                {/* <h3>Here is where the question will go</h3> */}
                {category && <GameWindow category={category} questionIndex={currentQuestion} userAnswers={userAnswers} scoreSubmit={scoreSubmit} />}
                {scoreValue && scoreRender()}
                {/* here we have to do a conditional rendering in which if the data array has data, then we build the elements for the question that corresponds to the index in the data array. the data array is the stuff we loaded from the lazy query */}
            </div>
            <div className='true-false-responses'>
                <button value='true' className='true-button' onClick={clickHandler}>True</button>
                <button value='false' className='false-button' onClick={clickHandler}>False</button>
            </div>
        </div>
      </div>
    );
  }
};

export default GamePage;

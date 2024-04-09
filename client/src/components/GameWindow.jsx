import React from "react";
import { QUERY_SINGLE_CATEGORY } from "../utils/querires";
import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { Timer } from "../components/Timer";
// import { useState, useEffect } from 'react'

// here, we need to query the database for questions based on the category, and display them along with a yes or no button, the button will submit the answer when clicked and change to the next question. this will need to use state and graphql queries to get and submit data, and to render on the screen.

const GameWindow = ({ category, questionIndex }) => {
  // const[questionIndex, setQuestionIndex] = useState(0)
  // if(!category){
  // return <div>
  //     <h2>Quiz Not Found</h2>
  // </div>
  // }
  console.log(category);
  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: {
      categoryId: category,
    },
  });
  // let category;
  console.log(data);

  const renderQuestion = () => {
    if (!data.category.setOfQuestions[questionIndex]) {
      return (
        <div>
          <h2>There are no more questions</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>{data.category.setOfQuestions[questionIndex].question}</h2>
        <Timer />
      </div>
    );
  };

  // variables: {
  //     name: "animal"
  // }

  // });

  // console.log(data.category);

  // var timeEl = document.querySelector(".time");
  // var secondsLeft = 10;

  // function setTime() {
  //     // Sets interval in variable
  //     var timerInterval = setInterval(function () {
  //         secondsLeft--;
  //         timeEl.textContent = secondsLeft + " seconds left in the game";

  //         if (secondsLeft === 0) {
  //             // Stops execution of action at set interval
  //             clearInterval(timerInterval);
  //             // Calls function to create and append image
  //             sendMessage();
  //         }

  //     }, 1000);
  // }

  // setTime();

  return <div>{data && renderQuestion()}</div>;
};

export default GameWindow;
// handle to handeqestins change

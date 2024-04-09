import React from 'react'
import { QUERY_SINGLE_CATEGORY } from '../utils/querires'
import { useQuery } from '@apollo/client'
// import { useState, useEffect } from 'react'

// here, we need to query the database for questions based on the category, and display them along with a yes or no button, the button will submit the answer when clicked and change to the next question. this will need to use state and graphql queries to get and submit data, and to render on the screen.

const GameWindow = ({ category }) => {
    const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY);
    // let category;
    if (data) {
        category = data.category;

        // variables: {
        //     name: "animal"
        // }

        // });
    }
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

    return (
        <div>{category}</div>
    )
};

export default GameWindow;
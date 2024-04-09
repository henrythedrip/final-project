import React from 'react';
import { QUERY_SINGLE_CATEGORY} from '../utils/querires';
import { useQuery,useMutation  } from '@apollo/client';
import { useState } from 'react';
import { } from '@apollo/client';
import { USER_ANSWERS } from '../utils/mutations';
// import { useState, useEffect } from 'react'

// here, we need to query the database for questions based on the category, and display them along with a yes or no button, the button will submit the answer when clicked and change to the next question. this will need to use state and graphql queries to get and submit data, and to render on the screen.

const GameWindow = ({ category, questionIndex, userAnswers }) => {
const [submitAnswers] = useMutation(USER_ANSWERS)
    // const[questionIndex, setQuestionIndex] = useState(0)
// if(!category){
// return <div>
//     <h2>Quiz Not Found</h2>
// </div>
// }
    console.log(userAnswers)
    const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, 
    {
        variables:{
            categoryId: category
        }
    })
    // let category;
    console.log(data)
    

        const renderQuestion = () => {
            if(!data.category.setOfQuestions[questionIndex]){
                gameEnd()
                return <div>
                    <h2>There are no more questions</h2>
                </div>
            }
            
            localStorage.setItem('question',data.category.setOfQuestions[questionIndex]._id)
            
            return <div>
                <h2 value={data.category.setOfQuestions[questionIndex]._id}>{data.category.setOfQuestions[questionIndex].question}</h2>
            </div>
        } 


        // variables: {
        //     name: "animal"
        // }

        // });
    
    // console.log(data.category);


    // var timeEl = document.querySelector(".time");
    let secondsLeft = 10;

    function setTime() {
        // Sets interval in variable
        const timerInterval = setInterval(function () {
            secondsLeft--;
            ;

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                gameEnd()
               return<div>
                <p>Times Up</p>
               </div>
            }
            return <div>
                <p>{secondsLeft}</p>
            </div>
        }, 1000);
    }

    // setTime();

    return (<div>
        {data && renderQuestion()}
    </div>
        
    )
};

export default GameWindow;
// handle to handeqestins change
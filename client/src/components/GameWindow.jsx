import React from 'react';
import { QUERY_SINGLE_CATEGORY} from '../utils/querires';
import { useQuery  } from '@apollo/client';
import { useState } from 'react';


// import { useState, useEffect } from 'react'

// here, we need to query the database for questions based on the category, and display them along with a yes or no button, the button will submit the answer when clicked and change to the next question. this will need to use state and graphql queries to get and submit data, and to render on the screen.

const GameWindow = ({ category, questionIndex, userAnswers }) => {

    // const[questionIndex, setQuestionIndex] = useState(0)
// if(!category){
// return <div>
//     <h2>Quiz Not Found</h2>
// </div>
// }
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
                
                return <div>
                    <h2>There are no more questions</h2>
                </div>
            }
            console.log(data.category.setOfQuestions[questionIndex]._id)
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





    return (<div>
        {data && renderQuestion()}
    </div>
        
    )
};

export default GameWindow;
// handle to handeqestins change
import React from 'react'
import GameItem from '../components/GameItem'
import { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { QUERY_SINGLE_CATEGORY } from '../utils/querires'

// we need to do something similar to challenge 4... we had a variable that was a current question, now we are going to use the useState instead of a variable ... once they answer the question, we change the value of the current question with the set current question to the next value... we should do the randomization of the questions in the backend .. return only the questions that we need from the backend in a random order. 
// we also need to add a timer, similar to challenge 4...
// we shouldn't pass the answers to the front end ... the server should keep the answers a secret and the server should check the question ... we need to think about the server as the part that is going to take on the work and the front end is a dumb program that doesn't have the answers. Front end should not know the business logic.


/* [{questionId: "098765", answer: false}, {questionId: "123456", answer: true}, {...}] -> Mutation
 BackEnd: typedefs: 
 input Answer {
    question: ID!
    answer: Boolean! 
}
submitAnswer([Answer]): Int

in resolver you could do a Question.findById()

FrontEnd: MUTATION`
mutation submitAnswer($answers: [Answer]!) {
  submitAnswer(answers: $answers)
}`
*/

const GamePage = () => {
    const [gameId, setGameId] = useState('')
    const [currnetQuestion, setCurrnetQuestion] = useState(0);
    const [singleCategory, { loading, data }] = useLazyQuery(QUERY_SINGLE_CATEGORY)
    useEffect(() => {
        // TODO: this should call the getGame query
        singleCategory({
            variables: {
                id: gameId
            }
        })
    }, [gameId])
    return (
        <div>
            <div className='game-header'>
                <h2>Choose A Category</h2>
            </div>
            <div className='game-selection'>
                <GameItem gameLink="/animal" gameName="Animals" />
                <GameItem gameLink="/death" gameName="Death" />
                <GameItem gameLink="/food" gameName="Food" />
                <GameItem gameLink="/game" gameName="Video Games" />
                <GameItem gameLink="/general" gameName="General" />
                <GameItem gameLink="/history" gameName="History" />
                <GameItem gameLink="/law" gameName="Law" />
                <GameItem gameLink="/sports" gameName="Sports" />
            </div>
            <div className='game-window'>
                <h3>Here is where the question will go</h3>
                {/* here we have to do a conditional rendering in which if the data array has data, then we build the elements for the question that corresponds to the index in the data array. the data array is the stuff we loaded from the lazy query */}
            </div>
            <div className='true-false-responses'>
                <button className='true-button'>True</button>
                <button className='false-button'>False</button>
            </div>
        </div>
    )
}

export default GamePage
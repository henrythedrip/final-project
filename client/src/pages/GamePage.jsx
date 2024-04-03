import React from 'react'
import GameItem from '../components/GameItem'

const GamePage = () => {
    return (
        <div>
            <div className='game-header'>
                <h2>Choose A Category</h2>
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
            </div>
            <div className='true-false-responses'>
                <button className='true-button'>True</button>
                <button className='false-button'>False</button>
            </div>
        </div>
    )
}

export default GamePage
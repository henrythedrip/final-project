import React from 'react'

const GameItem = ({ onClick, gameName }) => {
    return (
        <div onClick={onClick} className='game'>
            <span>{gameName}</span>
        </div>
        // <div className="game-item">
        //     <div className="game-header">
        //         <a href="/animal" className='game-button'>Animals</a>
        //         <a href="/death" className='game-button'>Death</a>
        //         <a href="/food" className='game-button'>Food</a>
        //         <a href="/videogames" className='game-button'>Video Games</a>
        //         <a href="/general" className='game-button'>General</a>
        //         <a href="/history" className='game-button'>History</a>
        //         <a href="/law" className='game-button'>Law</a>
        //         <a href="/sports" className='game-button'>Sports</a>
        //     </div>
        //     <div className='true-false-responses'>
        //         <button className='true-button'>True</button>
        //         <button className='false-button'>False</button>
        //     </div>
        // </div>
    )
}

export default GameItem
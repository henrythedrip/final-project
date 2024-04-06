import React from 'react'

const GameWindow = ({ category }) => {

    // here, we need to query the database for questions based on the category, and display them along with a yes or no button, the button will submit the answer when clicked and change to the next question. this will need to use state and graphql queries to get and submit data, and to render on the screen.

    return (
        <div>{category}</div>
    )
}

export default GameWindow
import React from "react";

const GameItem = ({ onClick, gameName }) => {
  return (
    <div onClick={onClick} className="game">
      <span>{gameName}</span>
    </div>
  );
};

export default GameItem;

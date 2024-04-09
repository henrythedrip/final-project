import React from "react";
import { QUERY_SINGLE_CATEGORY } from "../utils/querires";
import { useQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";
import { Timer } from "../components/Timer";

const GameWindow = ({ category, questionIndex, scoreSubmit }) => {
  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: {
      categoryId: category,
    },
  });

  console.log(category);

  const renderQuestion = () => {
    if (!data.category.setOfQuestions[questionIndex]) {
      return (
        <div>
          <h2>There are no more questions</h2>
        </div>
      );
    }
    console.log(data.category.setOfQuestions[questionIndex]._id);
    localStorage.setItem(
      "question",
      data.category.setOfQuestions[questionIndex]._id
    );

    return (
      <div>
        <h2 value={data.category.setOfQuestions[questionIndex]._id}>
          {data.category.setOfQuestions[questionIndex].question}
        </h2>
        <Timer />
      </div>
    );
  };

  return <div>{data && renderQuestion()}</div>;
};

export default GameWindow;
// handle to handeqestins change

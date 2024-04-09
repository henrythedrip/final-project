import React, { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState("00:00");
  const [timeExpired, setTimeExpired] = useState(false);
  const Ref = useRef();

  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const minute = Math.floor((total / 1000 / 60) % 60);
    const second = Math.floor((total / 1000) % 60);

    return { total, minute, second };
  }

  function startTimer(e) {
    let { total, minute, second } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minute > 9 ? minute : "0" + minute) +
        ":" +
        (second > 9 ? second : "0" + second)
      );
    } else {
      setTimer("00:00"); // Set timer to 00:00 when time is up
      clearInterval(Ref.current); // Clear interval to stop the timer
      setTimeExpired(true); // Set timeExpired state to true
    }
  }

  function clearTimer(e) {
    setTimer("00:00");
    setTimeExpired(false); // Reset timeExpired state
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  }

  function getDeadTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="Timer">
      {timeExpired ? (
        <h2>You did not complete 10 questions in the 30-second window</h2>
        // TODO: if we can add this code here, we should be able to display the quantity of questions they have answered when the timer runs out. This would be better than displaying the above code which is less fun
        // <h2>Number of Questions: {scoreSubmit.questionCount} Correct Questions: {scoreSubmit.correct}</h2>
      ) : (
        <h2>{timer}</h2>
      )}
    </div>
  );
};

export default Timer;

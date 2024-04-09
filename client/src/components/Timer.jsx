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
      setTimer("00:00");
      clearInterval(Ref.current);
      setTimeExpired(true);
    }
  }

  function clearTimer(e) {
    setTimer("00:00");
    setTimeExpired(false);
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
        <h2>You did not complete 5 questions in the 30-second window</h2>
      ) : (
        <h2>{timer}</h2>
      )}
    </div>
  );
};

export default Timer;

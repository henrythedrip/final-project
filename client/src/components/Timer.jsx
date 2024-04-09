import React, { useState, useEffect, useRef } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState("00:00");
  const Ref = useRef();
  //   console.log("Timer component");

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
    }
  }

  function clearTimer(e) {
    setTimer("00:00");
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

  function checkTimeUp() {
    if (timer === "00:00") {
      alert("Time's up!");
      clearTimer(getDeadTime());
    }
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    checkTimeUp();
  }, [timer]);

  //   console.log(timer);

  return (
    <div className="Timer">
      <h2>{timer}</h2>
    </div>
  );
};

export default Timer;

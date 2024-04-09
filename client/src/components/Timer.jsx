import React from 'react';
import { useState,useEffect } from 'react';
const timer = () => {

    const [seconds, setSeconds] = useState(0)

const ending = 10;
      
        // Sets interval in variable
        const getTime =  () => {
           const time = Date.parse(ending) - Date.now();

           setSeconds(Math.floor((time/1000)%60))

           timeInterval
        }
        const timeInterval = () => {
            const interval= setInterval(() => getTime(ending), 1000);
            return(clearInterval(interval));
        };

        return <div>
            <p>{seconds}</p>
        </div>
    }
    export default timer()
import React, { useEffect } from "react";
import "./Countdown.css";
import { useState } from "react";

const Countdown = () => {
    const [isStart, setIsStart] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, settimerId] = useState(0);


    const handleStart = () => {
        if (hours === 0 || minutes === 0 || seconds === 0) {
            alert("Please set a valid time");
            return;
        } else {
            setIsStart(true);
        }
        setIsStart(true);
    }
    const handleReset = () => {
        setIsStart(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0)
        clearInterval(timerId)
    };
    const handleInput = (e) => {
      const value = parseInt(e.target.value,e.target.id);
      if (e.target.id === "hours") {
        setHours(value);
      } else if (e.target.id === "minutes") {
        setMinutes(value);
      } else {
        setSeconds(value);
      }
    };
    const runTimer  =(sec,min,hr,tId)=> {
         if (sec > 0) {
          setSeconds((s)=> s - 1);
         } else if (min > 0 && sec === 0) {
          setMinutes((m)=> m - 1);
          setSeconds(59);
         } else {
          setHours((h)=> h - 1);
          setMinutes(59);
          setSeconds(59);
         }
          if (hr === 0 && min === 0 && sec === 0) {
            clearInterval(tId);
            alert("Time's up!");
            setIsStart(false);
          }
    };
    const handlePause = ()=>{
       setIsPaused(true)
       clearInterval(timerId)
    }
    const handleResume =()=>{
      setIsPaused(false)
      runTimer(seconds,minutes,hours)
    }
    useEffect(() => {
      let tId;
      if(isStart){
        tId = setInterval(() => {
          runTimer(seconds, minutes, hours, timerId);
        }, 1000);
        settimerId(tId);
      }
      return () => {
        clearInterval(tId);
      };
     
    }, [isStart,hours, minutes, seconds]);
    console.log(hours, minutes, seconds);
  return (
    <>
      <div>
        <h1>Countdown timer</h1>
        {!isStart &&<div className="input-container">
            <div className="input-box">
                <input onChange={handleInput} placeholder="HH" id="hours" />
                <input  onChange={handleInput} placeholder="MM" id="minutes" />
                <input  onChange={handleInput} placeholder="SS" id="seconds" />      
            </div>
            <button 
            className="timer-button"
            onClick={handleStart}
            >Start</button>
        </div>}
         
         { isStart &&<div className="show-container">
            <div className="timer-box">
                <div>{hours < 10 ? `0${hours}` : hours}</div>
                <span>:</span>
                <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                <span>:</span>
                <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                
            </div>
            <div className="action-box">
               {
                !isPaused &&  <button 
                className="timer-button" 
                onClick={handlePause}>Pause</button>
               }
               {
                isPaused &&  <button 
                className="timer-button" 
                onClick={handleResume}>Resume</button>
               }
                <button className="timer-button" onClick={handleReset}>Reset</button>
            </div>
         </div>
   }

      </div>
    </>
  );
};

export default Countdown;

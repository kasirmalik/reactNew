import React, { useState } from 'react'
import "./counter.css"

function Counter() {
    const [value, setValue] = useState(0);
    const [history, sethistory] = useState([]);
    const maintainHistory = (key,prev,curr)=>{
        // This function will maintain the history of actions
        // You can implement a stack or an array to keep track of the history
        // For simplicity, we will just log the action here
        console.log("Action maintained in history", value, "Key:", key, "Previous Value:", prev, "Current Value:", curr);
        const obj = {
          action: key,
          prev,
          curr
        }
        const copyHistory = [...history];
        copyHistory.unshift(obj);
        sethistory(copyHistory);
    }
    const handleClick = (key) => {
        const val = parseInt(key);
        maintainHistory(key,value,val + value);
        console.log(key);
        setValue((existingValue) => existingValue + val);
    }
  return (
    <div>
        <h1>Counter</h1>
      <div className="action-button">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="user-action">
        {[-100,-10,-1].map((btn)=>{
            return(
              <button key={btn} className="btn" onClick={()=>handleClick(btn)}>
                {btn}
              </button>
            )
        })}
        <div style={{fontSize:40}}>{value}</div>
        {["+10","+10","+1"].map((btn)=>{
            return(
              <button key={btn} className="btn"  onClick={()=>handleClick(btn)}>
                {btn}
              </button>
            )
        })}
      </div>
      <div className="history">
        <h3>history</h3>
        
       {history.map((item, index) => {
          return (
            <div key={index} className="history-item">
              <span>Action: {item.action}</span>:
              <span>Prev Value: {item.prev}</span>
              <span>Curr Value: {item.curr}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Counter

import React, { useState } from 'react'
import "./counter.css"

function Counter() {
    const [value, setValue] = useState(0);
    const handleClick = (key) => {
        const value = parseInt(key);
        console.log(key);
        setValue((existingValue) => existingValue + value);
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
        history coming
      </div>
    </div>
  )
}

export default Counter

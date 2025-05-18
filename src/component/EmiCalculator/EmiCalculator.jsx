import React, { useEffect, useState } from 'react'
import "./Emi.css"

function EmiCalculator() {
    const [principle, setPrinciple] = useState(0);
    const [intrest, setIntrest] = useState(0);
    const [years, setYears] = useState(0);
    const [Emi, setEmi] = useState(0);

    const handleChange = (e)=>{
        console.log(e.target.value,e.target.id)
        const id = e.target.id
        const value = parseInt( e.target.value)
        if (id === 'principle') {
            setPrinciple(value)
        } else if(id === 'intrest'){
            setIntrest(value)
        }else{
            setYears(value)
        }
    };
    const calculateEmi = ()=>{
        let r = intrest;
        if (principle&& r && years) {
            r= r/12/100;
            const calcPow = Math.pow(1 + r,years * 12);
            const amount = principle * ((r* calcPow) / (calcPow - 1))
            setEmi(Math.round(amount))
        }
    }
    
    useEffect(() => {
      calculateEmi()
        
    }, [principle,intrest,years]);
  return (
    <div className='container'>
      <h1>Emi Calulator</h1>
      <div className="input">
        <div>
        <label htmlFor="">
            Principle:
            <input 
            onChange={handleChange}
            type="number" id='principle' placeholder='Enter Loan Amount'  />
        </label>
        </div>
        <div>
        <label htmlFor="">
            Intrest:
            <input 
             onChange={handleChange}
            type="number" id='intrest' placeholder='Enter Intrest Rate'  />
        </label>
        </div>
        <div>
        <label htmlFor="">
            Years:
            <input 
             onChange={handleChange}
             type="number" id='year' placeholder='Enter years'  />
        </label>
        </div>
      </div>
      <div className="output">
        Your Emi is {Emi}
      </div>
    </div>
  )
}

export default EmiCalculator

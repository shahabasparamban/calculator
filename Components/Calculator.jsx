import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [display,setDisplay] =  useState("")
    const handleClick = (value) => {
        setDisplay(display +value)
    }
    const calculateResult = () => {
        try{
            const result = eval(display);
            setDisplay(result);
        }catch(error){
            setDisplay('Error,Invalid entry');
        }
    }
    const clearDisplay =() => {
        setDisplay("");
    }
    const delDisplay =()=> {
        setDisplay(display.slice(0, -1));
    }
  return (
    <div className='calc'>
        <div className='section'>
            <div className="display" id='display'>{display}</div>
<div className="buttons">
    <div className="row">
        <button className="col" onClick={()=>handleClick('1')}>1</button>
        <button className="col"onClick={()=>handleClick('2')}>2</button>
        <button className="col"onClick={()=>handleClick('3')}>3</button>
        <button className="col-symbol"onClick={()=>handleClick('+')}>+</button>
    </div>
    <div className="row">
        <button className="col" onClick={()=>handleClick('4')}>4</button>
        <button className="col" onClick={()=>handleClick('5')}>5</button>
        <button className="col" onClick={()=>handleClick('6')}>6</button>
        <button className="col-symbol" onClick={()=>handleClick('-')}>-</button>
    </div>
    <div className="row">
        <button className="col" onClick={()=>handleClick('7')}>7</button>
        <button className="col" onClick={()=>handleClick('8')}>8</button>
        <button className="col" onClick={()=>handleClick('9')}>9</button>
        <button className="col-symbol" onClick={()=>handleClick('*')}>*</button>
    </div>
    <div className="row">
        <button className="col" onClick={()=>handleClick('.')}>.</button>
        <button className="col" onClick={()=>handleClick('0')}>0</button>
        <button className="col-symbol" onClick={calculateResult}>=</button>
        <button className="col-symbol" onClick={()=>handleClick('/')}>/</button>
    </div>
    <div className="row">
        <button className="col-clear" onClick={clearDisplay}>C</button>
        <button className='col-del' onClick={delDisplay}>D</button>
    </div>


</div>
            

        </div>
      
    </div>
  )
}

export default Calculator


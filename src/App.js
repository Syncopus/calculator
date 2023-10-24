import { useState } from 'react';
import './App.css';
import { calc } from "a-calc";

function App() {
  const [result, setResult] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [isDecimalUsed, setIsDecimalUsed] = useState(false);
  const operators = ['+', '*', '-', '/'];

  const add_digit = (value) => {
    const lastIndex = displayedValue.length - 1;
    if (value === '.' && (isDecimalUsed || isNaN(displayedValue[lastIndex]))) {
      return;
    }
    if (value === '0' && displayedValue[lastIndex] === '0') {
      return;
    }
    if (value === '.') {
      setIsDecimalUsed(true);
    }
    if (operators.includes(value)) {
      setIsDecimalUsed(false);
      if (displayedValue.length === 0 || displayedValue === '-') {
        return;
      }
      if (operators.includes(displayedValue[lastIndex])) {
        if (displayedValue.length >= 2 && operators.includes(displayedValue[lastIndex-1])) {
          return;
        }
        if (value !== '-') {
          setDisplayedValue(displayedValue.slice(0, lastIndex) + value);
          return;
        }

      }
    }
    setDisplayedValue(displayedValue + value);
  }

  const equal_action = () => {
    const res = calc(displayedValue);
    setIsDecimalUsed(parseFloat(res) % 1 !== 0);
    setDisplayedValue(res);
    setResult(res);
  }

  const clear = () => {
    setIsDecimalUsed(false);
    setDisplayedValue("");
    setResult("");
  }

  return (
    <div className="App">
      <div id="calculator">
        <div id="display">
          <div id="formula">{result || "0"}</div>
          <div id="result">{displayedValue || "0"}</div>
        </div>
        <div id="pad">
          <div id="first-row">
            <div id="clear" className='buttonStyle' onClick={clear}><p>AC</p></div>
            <div id="divide" className='operatorButton buttonStyle' onClick={()=> add_digit("/")}><p>/</p></div>
            <div id="multiply" className='operatorButton buttonStyle' onClick={()=> add_digit("*")}><p>X</p></div>
          </div>
          <div id="second-row">
            <div id="numbers">
              <div id="seven" className='numberButton buttonStyle' onClick={()=> add_digit("7")}><p>7</p></div>
              <div id="eight" className='numberButton buttonStyle' onClick={()=> add_digit("8")}><p>8</p></div>
              <div id="nine" className='numberButton buttonStyle' onClick={()=> add_digit("9")}><p>9</p></div>
              <div id="four" className='numberButton buttonStyle' onClick={()=> add_digit("4")}><p>4</p></div>
              <div id="five" className='numberButton buttonStyle' onClick={()=> add_digit("5")}><p>5</p></div>
              <div id="six" className='numberButton buttonStyle' onClick={()=> add_digit("6")}><p>6</p></div>
              <div id="one" className='numberButton buttonStyle' onClick={()=> add_digit("1")}><p>1</p></div>
              <div id="two" className='numberButton buttonStyle' onClick={()=> add_digit("2")}><p>2</p></div>
              <div id="three" className='numberButton buttonStyle' onClick={()=> add_digit("3")}><p>3</p></div>
              <div id="zero" className='zeroButton buttonStyle' onClick={()=> add_digit("0")}><p>0</p></div>
              <div id="decimal" className='numberButton buttonStyle' onClick={()=> add_digit(".")}><p>.</p></div>
            </div>
            <div id="other-operations">
              <div id="subtract" className='operatorRightButton buttonStyle' onClick={()=> add_digit("-")}><p>-</p></div>
              <div id="add" className='operatorRightButton buttonStyle' onClick={()=> add_digit("+")}><p>+</p></div>
              <div id="equals" className='equalButton buttonStyle'  onClick={equal_action}><p>=</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

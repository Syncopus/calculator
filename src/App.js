import './App.css';

function App() {
  return (
    <div className="App">
      <div id="calculator">
        <div id="display">
          <div id="formula">FORMULA</div>
          <div id="result">RESULT</div>
        </div>
        <div id="pad">
          <div id="first-row">
            <div id="ac" className='buttonStyle'><p>AC</p></div>
            <div id="divide" className='operatorButton buttonStyle'><p>/</p></div>
            <div id="multiply" className='operatorButton buttonStyle'><p>X</p></div>
          </div>
          <div id="second-row">
            <div id="numbers">
              <div className='numberButton buttonStyle' onClick={()=> console.log("clicked !")}><p>7</p></div>
              <div className='numberButton buttonStyle'><p>8</p></div>
              <div className='numberButton buttonStyle'><p>9</p></div>
              <div className='numberButton buttonStyle'><p>4</p></div>
              <div className='numberButton buttonStyle'><p>5</p></div>
              <div className='numberButton buttonStyle'><p>6</p></div>
              <div className='numberButton buttonStyle'><p>1</p></div>
              <div className='numberButton buttonStyle'><p>2</p></div>
              <div className='numberButton buttonStyle'><p>3</p></div>
              <div className='zeroButton buttonStyle'><p>0</p></div>
              <div className='numberButton buttonStyle'><p>.</p></div>
            </div>
            <div id="other-operations">
              <div id="divide" className='operatorRightButton buttonStyle'><p>-</p></div>
              <div id="plus" className='operatorRightButton buttonStyle'><p>+</p></div>
              <div id="equal" className='equalButton buttonStyle'><p>=</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

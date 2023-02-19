import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(''); 
  const [value, setValue]= useState('');
  const handleClick = (e) =>{
    setResult(result+e.target.value);
  }
 
  const handleClear = () =>{
    setResult('');
    setValue('');
  }

  const handleBack= () =>{
    setResult(result.slice(0, -1))
  }

  const handleEval = () => {
    try {
      setValue(eval(result));
    } catch (error) {
      setValue("Error");
    }
    
  }

  return (
    <>
      <div className='container'>

        <div className='display'>
          <form>
            <input value={result}></input><br/>
            <input className='ans' value={value}></input>
          </form>
        </div>
        
        <div className='keyboard'>
          <div className='fn-keys'>
            <button className='btn btn-ac' value="" onClick={handleClear}>AC</button>
            <button className='btn' value="(" onClick={handleClick}>(</button>
            <button className='btn' value=")" onClick={handleClick}>)</button>
            <button className='btn btn-yellow' value="" conClick= {handleBack} >&larr;</button>
          </div>
          <div className='no-keys'>
          <button className='btn' value="7" onClick={handleClick}>7</button>
          <button className='btn' value="8" onClick={handleClick}>8</button>
          <button className='btn' value="9" onClick={handleClick}>9</button>
          <button className='btn btn-yellow' value="/" onClick={handleClick}>/</button>
          <button className='btn' value="4" onClick={handleClick}>4</button>
          <button className='btn' value="5" onClick={handleClick}>5</button>
          <button className='btn' value="6" onClick={handleClick}>6</button>
          <button className='btn btn-yellow' value="*" onClick={handleClick}>X</button>
          <button className='btn' value="1" onClick={handleClick}>1</button>
          <button className='btn' value="2" onClick={handleClick}>2</button>
          <button className='btn' value="3" onClick={handleClick}>3</button>
          <button className='btn btn-yellow' value="-" onClick={handleClick}>-</button>
          <button className='btn' value="0" onClick={handleClick}>0</button>
          <button className='btn' value="." onClick={handleClick}>.</button>
          <button className='btn' value="+" onClick={handleClick}>+</button>
          <button className='btn btn-yellow' value="=" onClick={handleEval}>=</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import * as math from 'mathjs';

function Calculator() {
  const [result, setResult] = useState('');

  const appendNumber = (number) => {
    setResult(result + number);
  };

  const appendOperator = (operator) => {
    setResult(result + operator);
  };

  const clearResult = () => {
    setResult('');
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
    } catch (error) {
      setResult('Math Error');
      console.log(error);
    }
    
  };

  return (
    <div className="calculator">
      <div className="calculator-top">
        <input
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="result"
          value={result}
          placeholder="0"
        />
      </div>
      <div className="calculator-btm">
        <a href="/" className="btn-1" onClick={handleDelete}>Del</a>
        <a href="/" className="btn-2" onClick={clearResult}>C</a>
        <a href="/" className="btn-3" onClick={() => appendOperator('/')}>/</a>
        <a href="/" className="btn-4" onClick={() => appendOperator('*')}>*</a>
        <a href="/" className="btn-5" onClick={() => appendNumber(1)}>1</a>
        <a href="/" className="btn-6" onClick={() => appendNumber(2)}>2</a>
        <a href="/" className="btn-7" onClick={() => appendNumber(3)}>3</a>
        <a href="/" className="btn-8" onClick={() => appendOperator('-')}>-</a>
        <a href="/" className="btn-9" onClick={() => appendNumber(4)}>4</a>
        <a href="/" className="btn-10" onClick={() => appendNumber(5)}>5</a>
        <a href="/" className="btn-11" onClick={() => appendNumber(6)}>6</a>
        <a href="/" className="btn-12" onClick={() => appendOperator('+')}>+</a>
        <a href="/" className="btn-13" onClick={() => appendNumber(7)}>7</a>
        <a href="/" className="btn-14" onClick={() => appendNumber(8)}>8</a>
        <a href="/" className="btn-15" onClick={() => appendNumber(9)}>9</a>
        <a href="/" className="btn-16" onClick={calculate}>=</a>
        <a href="/" className="btn-17" onClick={() => appendNumber()}>0</a>
        <a href="/" className="btn-18" onClick={() => appendNumber('.')}>.</a>
      </div>
    </div>
  );
}

export default Calculator;

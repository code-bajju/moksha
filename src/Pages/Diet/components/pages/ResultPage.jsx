import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider';
import bmiResults from '../../data/bmiData';
import DietList from '../DietList';
import '../base/Results.css'


function Results() {
  const { bmi, name } = useContext(MainContext);
  const [results, setResults] = useState(bmiResults[0]);
  const [toggle, setToggle] = useState(false);

  const handleResult = () => {
    if (bmi < 18.5) {
      setResults(bmiResults[0]);
    } else if (18.5 <= bmi && bmi < 24.9) {
      setResults(bmiResults[1]);
    } else if (25 < bmi && bmi < 29.9) {
      setResults(bmiResults[2]);
    } else if (bmi > 30) {
      setResults(bmiResults[3]);
    }
  };

  useEffect(() => {
    handleResult();
  }, [bmi]);

  return (
    <div className='main-container'>
      <div className='gif'>
        <img className='bmi-image' src="https://github.com/code-bajju/Project-Image/blob/main/bmi.png?raw=true" alt='' />
      </div>
      <div className='result'>
        <h2>{name}'s BMI Results: {bmi}</h2>
        <div className='result' style={{ color: results.color, backgroundColor: results.bgColor }}>{results.bmiType}</div>
        <p>{results.bmiDesc}</p>
      </div>

      <div>
        <p>Check out the list below for a diet that is right for you.</p>
        <button className="btn" type="button" onClick={() => setToggle(!toggle)}>Diet List</button>
        {toggle && <DietList />}
      </div>
    </div>
  );
}

export default Results;

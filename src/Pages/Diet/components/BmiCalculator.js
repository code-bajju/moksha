import React, { useContext, useState } from 'react';
import { MainContext } from '../context/MainContextProvider';
import { CalcButton } from '../styles/Buttons';
import male from '../assets/male.png';
import female from '../assets/female.png';
import './base/BmiCalculation.css'

function BmiCalculator() {
  const { setName, setWeight, setHeight, calculate } = useContext(MainContext);
  const [value, setValue] = useState('1');

  const imgPath = value === '1' ? male : female;

  return (
    <div className='main-container'>
      <img className='bmi-image' src="https://github.com/code-bajju/Project-Image/blob/main/bmi.png?raw=true" alt='' />
      <div className='details'>
        <input type="text" placeholder='Your name...' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Weight, etc 60kg' onChange={(e) => setWeight(e.target.value)} />
        <input type="text" placeholder='Height, etc 160cm' onChange={(e) => setHeight(e.target.value / 100)} />
        <div>
          <label>
            <input type="radio" value='1' checked={value === '1'} onChange={(e) => setValue(e.target.value)} />
         <span>Male</span>
          </label>
          <label>
            <input type="radio" value='2' checked={value === '2'} onChange={(e) => setValue(e.target.value)} />
            <span>Female</span>
          </label>
        </div>
        <CalcButton type='button' className='btn' color={value} to='/results' onClick={calculate}>Calculate</CalcButton>
      </div>
    </div>
  );
}

export default BmiCalculator;

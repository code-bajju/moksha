import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from '../context/MainContextProvider';
import dietLists from '../data/dietLists';
import './base/Results.css';
import { Col } from 'react-bootstrap';



function DietList() {
  const { bmi } = useContext(MainContext);
  const dietList = dietLists[0];
  const [diet, setDiet] = useState(dietList.underweight);

  const handleDiet = async () => {
    if (bmi < 18.5) {
      setDiet(dietList.underweight)
    } else if (18.5 <= bmi && bmi < 24.9) {
      setDiet(dietList.health)
    } else if (25 < bmi && bmi < 29.9) {
      setDiet(dietList.overweight)
    } else if (bmi > 30) {
      setDiet(dietList.obesity)
    }
  }

  useEffect(() => {
    handleDiet();
  }, [bmi])

  const newBreakfast = diet?.breakfast?.split(",").map((item) => `${item}`);
  const newLunch = diet?.lunch?.split(",").map((item) => `${item}`);
  const newDinner = diet?.dinner?.split(",").map((item) => `${item}`);

  return (
    // <Col md={6} xl={4} lg={6} sm={12}>
    <div className='diet-plan'>
      <div className='breakfast'>
        <h2>Breakfast</h2>
        {newBreakfast?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className='lunch'>
        <h2>Lunch</h2>
        {newLunch?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className='dinner'>
        <h2>Dinner</h2>
        {newDinner?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
    // </Col>
  );
}

export default DietList;

import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [localData, setLocalData] = useState([])

  const handleStorage = () => {
    JSON.parse(localStorage.getItem('userData'));
    localStorage.setItem('localData', JSON.stringify([...localData]));
  }

  useEffect(() => {
    handleStorage();
  }, [])

  const calculate = () => {
    let bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);
    localData.push({
      name: name,
      bmi: bmiValue,
    })
    setLocalData(localData)
  }

  const value = {
    bmi,
    name,
    setName,
    setWeight,
    setHeight,
    calculate,
    localData,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
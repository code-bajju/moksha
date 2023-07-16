import React, { useState } from 'react';
import { Select, Button, Progress } from 'antd';
import data from './data.json';
import data2 from './data2.json';
import './Nutrients.css';

const { Option } = Select;

function Nutrients() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalNutrients, setTotalNutrients] = useState(null);

  const handleSelectChange = (value) => {
    const selectedItem = data.find((item) => item.name === value);

    if (!selectedItems.some((item) => item.name === selectedItem.name)) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
    }
  };

  const handleCalculateClick = () => {
    let calculatedNutrients = null;

    if (selectedItems.length > 0) {
      calculatedNutrients = {};

      for (let i = 0; i < selectedItems.length; i++) {
        const item = selectedItems[i];

        for (const nutrient in item.nutrients) {
          if (calculatedNutrients.hasOwnProperty(nutrient)) {
            calculatedNutrients[nutrient] += item.nutrients[nutrient];
          } else {
            calculatedNutrients[nutrient] = item.nutrients[nutrient];
          }
        }
      }
    }

    setTotalNutrients(calculatedNutrients);
  };

  const handleClearClick = () => {
    setSelectedItems([]);
    setTotalNutrients(null);
  };

  const renderNutrientSection = (title, nutrients, type) => (
    <div className="section">
      <h2>{title}</h2>
      {Object.entries(nutrients).map(([nutrient, value]) => {
        const unit = getUnitFromData(nutrient);
        return (
          <div key={nutrient} className="nutrient-item">
            <span>{nutrient}</span>
            <span>{value} {unit}</span>
            <Progress percent={value} size="small" showInfo={false} />
          </div>
        );
      })}
    </div>
  );

  const nutrientsAvailableInDiet = totalNutrients
    ? Object.entries(totalNutrients).filter(([nutrient, value]) =>
        selectedItems.every((item) => item.nutrients.hasOwnProperty(nutrient))
      )
    : [];

  const getTypeFromData = (nutrientName) => {
    const nutrient = data2.find((item) => item.name === nutrientName);
    return nutrient ? nutrient.type : '';
  };

  const getUnitFromData = (nutrientName) => {
    const nutrient = data.find((item) => item.name === nutrientName);
    return nutrient ? nutrient.unit : '';
  };

  return (
    <div className="App">
      <Select onChange={handleSelectChange} placeholder="Select an item" style={{ width: 200 }}>
        {data.map((item) => (
          <Option key={item.name} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
      <div className="Selected-list">
        <h2>Selected Items:</h2>
        {selectedItems.length > 0 ? (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No items selected</p>
        )}
        {selectedItems.length > 0 && (
          <div>
            <Button onClick={handleCalculateClick} type="primary">
              Calculate Nutrients
            </Button>
            <Button onClick={handleClearClick} type="danger">
              Clear Selection
            </Button>
          </div>
        )}
      </div>
      <h2>Total Nutrients:</h2>
      {nutrientsAvailableInDiet.length > 0 && (
        <div className="Result-page">
          <div className="progress-grid">
            {nutrientsAvailableInDiet.map(([nutrient, value]) => {
              const type = getTypeFromData(nutrient);
              if (type === 'Essential Amino Acids') {
                return renderNutrientSection(nutrient, { [nutrient]: value }, type);
              }
              return null;
            })}
          </div>
          <div className="result2">
            {nutrientsAvailableInDiet.map(([nutrient, value]) => {
              const type = getTypeFromData(nutrient);
              if (type === 'Vitamins') {
                return renderNutrientSection(nutrient, { [nutrient]: value }, type);
              }
              return null;
            })}
          </div>
          <div className="result3">
            {nutrientsAvailableInDiet.map(([nutrient, value]) => {
              const type = getTypeFromData(nutrient);
              if (type === 'Minerals') {
                return renderNutrientSection(nutrient, { [nutrient]: value }, type);
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nutrients;

// NutrientCount.js
import React, { useEffect, useState } from 'react';

const NutrientCount = () => {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Set the URL directly
    setIframeUrl('https://food-nutrients.github.io/');
  }, []);

  return (
    <div>
      <iframe
        title="NutrientCount"
        src={iframeUrl}
        width="100%"
        height="700px"
        margin-top="100px"
        frameBorder="0"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};


export default NutrientCount;




// const { Option } = Select;

// const NutrientCount = () => {
//   const [food, setFood] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [unit, setUnit] = useState('cup');
//   const [foodList, setFoodList] = useState([]);
//   const [totalCalories, setTotalCalories] = useState(0);
//   const [totalProtein, setTotalProtein] = useState(0);
//   const [totalCarbs, setTotalCarbs] = useState(0);
//   const [totalFat, setTotalFat] = useState(0);
//   const [personWeight, setPersonWeight] = useState(0);

//   const handleFoodChange = (value) => {
//     setFood(value);
//   };

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleUnitChange = (value) => {
//     setUnit(value);
//   };

//   const handlePersonWeightChange = (event) => {
//     setPersonWeight(event.target.value);
//   };

//   const handleAddFood = () => {
//     if (food && quantity > 0) {
//       let calories = 0;
//       let protein = 0;
//       let carbs = 0;
//       let fat = 0;

//       if (food === 'apple') {
//         calories = 52;
//         protein = 0.3;
//         carbs = 14;
//         fat = 0.2;
//       } else if (food === 'banana') {
//         calories = 96;
//         protein = 1.2;
//         carbs = 23;
//         fat = 0.2;
//       } else if (food === 'chicken') {
//         calories = 335;
//         protein = 27;
//         carbs = 0;
//         fat = 24;
//       } else if (food === 'rice') {
//         calories = 130;
//         protein = 2.7;
//         carbs = 28;
//         fat = 0.3;
//       }

//       const foodItem = {
//         food: food,
//         quantity: quantity,
//         calories: calories * quantity,
//         protein: protein * quantity,
//         carbs: carbs * quantity,
//         fat: fat * quantity,
//       };

//       setFoodList([...foodList, foodItem]);

//       setTotalCalories(totalCalories + foodItem.calories);
//       setTotalProtein(totalProtein + foodItem.protein);
//       setTotalCarbs(totalCarbs + foodItem.carbs);
//       setTotalFat(totalFat + foodItem.fat);

//       // Save food item to JSON file
//       saveFoodItem(foodItem);

//       setFood('');
//       setQuantity('');
//       setUnit('cup');
//     }
//   };

//   const handleReset = () => {
//     setFoodList([]);
//     setTotalCalories(0);
//     setTotalProtein(0);
//     setTotalCarbs(0);
//     setTotalFat(0);
//     setPersonWeight(0);
//   };

//   const updateTotalNutrientCount = () => {
//     return {
//       totalCalories: totalCalories.toFixed(2),
//       totalProtein: totalProtein.toFixed(2),
//       totalCarbs: totalCarbs.toFixed(2),
//       totalFat: totalFat.toFixed(2),
//     };
//   };

//   const saveFoodItem = (foodItem) => {
//     // Write code to save the food item to a JSON file or send a request to a server
//     console.log('Food item saved successfully');
//   };

//   const renderFoodList = (nutrient) => {
//     return foodList.map((foodItem, index) => (
//       <div key={index}>
//         {foodItem.food}: {nutrient} {foodItem[nutrient].toFixed(2)}g
//       </div>
//     ));
//   };

//   const calculatePercentage = (nutrient) => {
//     const totalNutrient =
//       nutrient === 'protein'
//         ? totalProtein
//         : nutrient === 'carbs'
//         ? totalCarbs
//         : nutrient === 'fat'
//         ? totalFat
//         : totalCalories;
//     const maxNutrient = nutrient === 'protein' ? calculateProteinIntake() : calculateCalorieIntake();
//     return (totalNutrient / maxNutrient) * 100;
//   };

//   const calculateProteinIntake = () => {
//     const sedentaryProtein = personWeight * 0.8;
//     const activeProtein = personWeight * 2.0;
//     return totalProtein > sedentaryProtein ? activeProtein : sedentaryProtein;
//   };

//   const calculateCalorieIntake = () => {
//     // Implement your custom logic to calculate calorie intake based on individual factors
//     // For simplicity, let's assume it's 2000 calories
//     return 2000;
//   };

//   const isIntakeExceeded = (nutrient) => {
//     const totalNutrient =
//       nutrient === 'protein'
//         ? totalProtein
//         : nutrient === 'carbs'
//         ? totalCarbs
//         : nutrient === 'fat'
//         ? totalFat
//         : totalCalories;
//     const maxNutrient = nutrient === 'protein' ? calculateProteinIntake() : calculateCalorieIntake();
//     return totalNutrient > maxNutrient;
//   };

//   const totalNutrientData = [
//     { name: 'Calories', value: totalCalories },
//     { name: 'Protein', value: totalProtein },
//     { name: 'Carbs', value: totalCarbs },
//     { name: 'Fat', value: totalFat },
//   ];

//   return (
//     <div>
//       <h3>Nutrients Counter</h3>

//       <div className="container2">
//        <div className=''></div> <label htmlFor="food-select">Select a Food:</label>
//         <Select
//           id="food-select"
//           value={food}
//           onChange={handleFoodChange}
//           showSearch
//           style={{ width: 200 }}
//           placeholder="Select"
//           className='drop'
//         >
//           <Option value="apple">Apple</Option>
//           <Option value="banana">Banana</Option>
//           <Option value="chicken">Chicken</Option>
//           <Option value="rice">Rice</Option>
//         </Select>
//         <label htmlFor="quantity-input">Quantity:</label>
//         <Input
//           type="number"
//           id="quantity-input"
//           placeholder="Enter quantity"
//           value={quantity}
//           style={{ width: 200 }}
//           onChange={handleQuantityChange}
//         />
//         <label htmlFor="unit-select">Unit:</label>
//         <Select id="unit-select" value={unit} onChange={handleUnitChange} style={{ width: 120 }}>
//           <Option value="cup">Cup(s)</Option>
//           <Option value="piece">Piece(s)</Option>
//           <Option value="gram">Gram(s)</Option>
//         </Select>

//         <label htmlFor="person-weight-input">Person Weight:</label>
//         <Input
//           type="number"
//           id="person-weight-input"
//           placeholder="Enter weight"
//           value={personWeight}
//           onChange={handlePersonWeightChange}
//           style={{ width: 200 }}
//         />
// <br />
//         <Button id="add-button" onClick={handleAddFood} type="primary">
//           Add Food
//         </Button>
//         <br />
//         <Button id="reset-button" onClick={handleReset}>
//           Reset
//         </Button>
//         </div>
//         <Divider />

//         <div className="container3">
//           <div id="protein-section" className="nutrient-section">
//             <h3>Protein</h3>
//             {renderFoodList('protein')}
//             <Progress
//               percent={Math.round(calculatePercentage('protein'))}
//               status={isIntakeExceeded('protein') ? 'exception' : 'normal'}
//             />
//             <div>
//               Recommended Intake: {Math.round(personWeight * 0.8)} - {Math.round(personWeight * 2.0)} grams
//             </div>
//             {isIntakeExceeded('protein') && (
//               <div>
//                 Exceeding Limit: {Math.max(totalProtein - personWeight * 2.0, 0).toFixed(2)} grams
//               </div>
//             )}
//           </div>

//           <div id="fat-section" className="nutrient-section">
//             <h3>Fat</h3>
//             {renderFoodList('fat')}
//             <Progress
//               percent={Math.round(calculatePercentage('fat'))}
//               status={isIntakeExceeded('fat') ? 'exception' : 'normal'}
//             />
//             <div>
//               Recommended Intake: {Math.round(personWeight * 0.2)} - {Math.round(personWeight * 0.35)} grams
//             </div>
//             {isIntakeExceeded('fat') && (
//               <div>
//                 Exceeding Limit: {Math.max(totalFat - personWeight * 0.35, 0).toFixed(2)} grams
//               </div>
//             )}
//           </div>

//           <div id="calories-section" className="nutrient-section">
//             <h3>Calories</h3>
//             {renderFoodList('calories')}
//             <Progress
//               percent={Math.round(calculatePercentage('calories'))}
//               status={isIntakeExceeded('calories') ? 'exception' : 'normal'}
//             />
//             <div>Recommended Intake: Custom calculation based on individual factors</div>
//           </div>

//           <div id="carbs-section" className="nutrient-section">
//             <h3>Carbs</h3>
//             {renderFoodList('carbs')}
//             <Progress
//               percent={Math.round(calculatePercentage('carbs'))}
//               status={isIntakeExceeded('carbs') ? 'exception' : 'normal'}
//             />
//             <div>Recommended Intake: Custom calculation based on individual factors</div>
//           </div>
//         </div>
// <div>
// <h3>Total Nutrient Count</h3>
// <div>Total Items: {foodList.length}</div>
//     <div>
//       {foodList.map((foodItem, index) => (
//         <span key={index}>{foodItem.food}{index !== foodList.length - 1 ? ', ' : ''}</span>
//       ))}
//     </div>
// </div>
//         <div className="total-nutrient-section">
          
//   <div className="card">
//     <div>Total Calories: {updateTotalNutrientCount().totalCalories} kcal</div>
  
//   </div>
//   <div className="card">
//     <div>Total Protein: {updateTotalNutrientCount().totalProtein} g</div>
//   </div>
//   <div className="card">
//     <div>Total Carbs: {updateTotalNutrientCount().totalCarbs} g</div>
//   </div>
//   <div className="card">
//     <div>Total Fat: {updateTotalNutrientCount().totalFat} g</div>
//   </div>
// </div>


             
//     </div>
//   );
// };

//export default NutrientCount;




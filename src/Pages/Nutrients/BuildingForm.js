import React, { useState } from 'react';
import './Form.css'; // Import the CSS file
import dietPlans from './dietinj.json'; // Import the diet plans JSON file

const BuildingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    injuries: [],
    otherInfo: '',
  });

  const injuriesOptions = ['Diabetes', 'BackPain', 'Headache', 'SprainedAnkle', 'MuscleStrain', 'NoIssues'];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleInjuriesChange = (event) => {
    const selectedInjuries = Array.from(event.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      injuries: selectedInjuries,
    });
  };

  const getDietPlan = (injuries) => {
    // Basic example: associating injuries with diet plans
    const selectedInjuryPlans = injuries.map((injury) => dietPlans[injury]);
    const filteredPlans = selectedInjuryPlans.filter((plan) => plan !== undefined);

    return filteredPlans.join('\n');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming you have a server endpoint to handle form submissions
    fetch('/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(dietPlan => {
        console.log('Received diet plan:', dietPlan);
        // Handle the diet plan (e.g., display it to the user)
        const selectedInjuries = formData.injuries;
        const dietPlansToShow = Array.from({ length: 3 }, () => getDietPlan(selectedInjuries));
        alert(dietPlansToShow.join('\n\n')); // Display the diet plans three times with a separation
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="building-form-container">
      <h2 className='info-form'>Personal Information Form</h2>
      <form className="building-form" onSubmit={handleSubmit}>
         <div className='label-div'>
        <label className='label-display'>
          <span className='span-display'>Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        </div>
        <label className='label-display'>
          <span className='span-display'>Age: </span>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        
        <label className='label-display'>
          <span className='span-display'>Gender:</span>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className='label-display'>
          <span className='span-display'>Health <br/>Issues:</span>
          <select
            name="injuries"
            multiple
            value={formData.injuries}
            onChange={handleInjuriesChange}
          >
            {injuriesOptions.map((injury) => (
              <option key={injury} value={injury}>
                {injury}
              </option>
            ))}
          </select>
        </label>

        <label className='label-display'>
          <span className='span-display'>Other Information:</span>
          <textarea name="otherInfo" className='textarea-info' value={formData.otherInfo} onChange={handleChange} />
        </label>

        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuildingForm;

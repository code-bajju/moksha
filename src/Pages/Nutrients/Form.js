import React, { useState } from 'react';
import './Form.css';

const BuildingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    injuries: [],
    otherInfo: '',
  });

  const [dietPlan, setDietPlan] = useState('');

  const injuriesOptions = ['Diabetes', 'Back Pain', 'Headache', 'Sprained Ankle', 'Muscle Strain', 'No Issues'];

  const dietPlans = {
    Diabetes: {
        breakfast: "High-fiber cereal with yogurt",
        lunch: "Grilled chicken salad",
        dinner: "Baked salmon with steamed vegetables",
      },
    'Back Pain': {
        breakfast: "Greek yogurt with mixed berries and a sprinkle of chia seeds.",
        lunch: "Quinoa bowl with roasted vegetables and a drizzle of olive oil.",
        dinner: "Baked salmon with steamed broccoli and quinoa",
      },
    Headache: 'Stay hydrated and maintain regular meals. Avoid foods that may trigger headaches, such as caffeine or certain additives.',
    'Sprained Ankle': 'Consume foods high in vitamins C and E, and minerals like zinc, to support tissue healing. Include anti-inflammatory foods.',
    'Muscle Strain': 'Ensure an adequate intake of protein for muscle repair. Include foods rich in potassium and magnesium for muscle function.',
    'No Issues': 'Maintain a balanced diet with a variety of nutrients from different food groups.',
  };

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
    const selectedInjuryPlans = injuries.map((injury) => dietPlans[injury]);
    return selectedInjuryPlans.join('\n');
  };

  const handleSubmit = (event) => {
    console.log('Submit button clicked!');
    event.preventDefault();

    const receivedDietPlan = getDietPlan(formData.injuries);
    setDietPlan(receivedDietPlan);
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
          <span className='span-display'>Health <br />Issues:</span>
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

      {dietPlan && (
        <div className="diet-plan-container">
          <h3>Diet Plan:</h3>
          <p>{dietPlan}</p>
        </div>
      )}
    </div>
  );
};

export default BuildingForm;

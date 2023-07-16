import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>What is the body mass index (BMI)?</h1>
      <div>
        <img src="image.jpg" alt='' />
        <div>
          <p>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
          <p>The BMI calculation divides an adult's weight in kilograms by their height in meters squared. For example, A BMI of 25 means 25kg/m².</p>
        </div>
      </div>
      <h2>BMI ranges</h2>
      <p>For most adults, an ideal BMI is in the 18.5 to 24.9 range.</p>
      <p>For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.</p>
      <p>If your BMI is:</p>
      <table>
        <caption>Weight statuses by BMI range</caption>
        <thead>
          <tr>
            <th>BMI</th>
            <th>Weight Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 – 24.9</td>
            <td>Healthy Weight</td>
          </tr>
          <tr>
            <td>25.0 – 29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30.0 and Above</td>
            <td>Obesity</td>
          </tr>
        </tbody>
      </table>
      <p>If you want to calculate your BMI, click &#128073; <Link to='/'><u>BMI Calculate</u></Link> </p>
    </div>
  );
}

export default About;

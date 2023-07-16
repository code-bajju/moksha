
import React from "react";

import "./Yoga.css";

let flag = false;

function Yoga() {
 
    const redirectToWebsite = () => {
      window.location.href = 'https://asana-sense.vercel.app/start';
    };

  return (
    <div>
        <div className="about-right mt-5 mt-lg-0">
                       <h4>
                       Are you ready to embark on a journey of self-discovery and self-care? Through the practice of yoga, you can find harmony between mind, body, and spirit. By incorporating yoga into your daily routine, you'll embark on a beautiful process of transformation, promoting physical strength, mental clarity, and emotional balance.
                       </h4>
                       
            <button className="secondary-btn" onClick={redirectToWebsite}>Try Now</button>
            </div>
  </div>
  );
}

export default Yoga;

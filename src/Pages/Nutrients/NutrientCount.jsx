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
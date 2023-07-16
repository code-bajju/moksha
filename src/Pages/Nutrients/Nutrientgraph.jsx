// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const NutrientGraph = ({ totalNutrientData }) => {
//   const graphRef = useRef(null);

//   useEffect(() => {
//     const graphElement = graphRef.current.getContext('2d');

//     // Prepare data for the graph
//     const data = {
//       labels: totalNutrientData.map((item) => item.name),
//       datasets: [
//         {
//           label: 'Total Nutrients',
//           data: totalNutrientData.map((item) => item.value),
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//         },
//       ],
//     };

//     // Create the graph using Chart.js
//     new Chart(graphElement, {
//       type: 'bar',
//       data: data,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [totalNutrientData]);

//   return <canvas ref={graphRef} />;
// };

// export default NutrientGraph;

// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/fetch-website-content', async (req, res) => {
  try {
    const response = await axios.get('https://food-nutrients.github.io/');
    const extractedHtml = response.data;
    res.send(extractedHtml);
  } catch (error) {
    console.error('Error fetching website content:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

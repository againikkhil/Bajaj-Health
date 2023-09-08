const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change the port as needed

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle both GET and POST requests
app.all('/endpoint', (req, res) => {
  if (req.method === 'POST') {
    // Handle POST request
    const requestData = req.body;
    const userId = requestData.userId;
    const collegeEmail = requestData.collegeEmail;
    const collegeRollNumber = requestData.collegeRollNumber;
    const numbers = requestData.numbers || [];
    const alphabets = requestData.alphabets || [];

    // Find the highest alphabet in the input array of alphabets
    const highestAlphabet = alphabets.length > 0 ? alphabets.reduce((a, b) => (a > b ? a : b)) : null;

    const response = {
      status: 'Success',
      userId,
      collegeEmail,
      collegeRollNumber,
      numbers,
      alphabets,
      highestAlphabet,
    };

    res.json(response);
  } else if (req.method === 'GET') {
    // Handle GET request
    res.send('This is a GET request to /endpoint');
  } else {
    res.status(405).send('Method Not Allowed');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint for addition
app.post('/add', (req, res) => {
  const { X, Y } = req.body;
  res.json({ X, Y, Result: X + Y });
});

// Endpoint for subtraction
app.post('/sub', (req, res) => {
  const { X, Y } = req.body;
  res.json({ X, Y, Result: X - Y });
});

// Endpoint for multiplication
app.post('/mul', (req, res) => {
  const { X, Y } = req.body;
  res.json({ X, Y, Result: X * Y });
});

// Endpoint for division, with division by zero check
app.post('/div', (req, res) => {
  const { X, Y } = req.body;
res.json({ X, Y, Result: X / Y });
  }
);

app.listen(8080, () => {
  console.log(`Calculator service is running on port 8080`);
});
'use strict';

const express = require('express');

// Constants
const PORT = 9001;
const HOST = 'exchange';

// App
const app = express();

app.get('/convert', (req, res) => {
  res.json({
    success: true,
    rate: Math.round(((Math.random() * 5)) * 100) / 100 // return random number between 0 and 5 with 2 decimal
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const db = require('../db.js');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/reviews', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  db.getReviews((err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
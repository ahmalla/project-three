const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoute = require('./routes/student')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)



const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

// 404 Error
app.use((req, res, next) => {
    next(createError(404));
  });
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
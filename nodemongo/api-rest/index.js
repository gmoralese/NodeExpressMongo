'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, function (err) {
  if (err)
      console.error('Error conectandose a la BD');
  else
      console.log("Database connection established successfully");
});


app.listen(config.port, () => {
  console.log('api rest corriendo en localhost:' + config.port);
});

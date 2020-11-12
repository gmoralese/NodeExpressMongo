'use strict'

const express = require('express');
const app = express();
const api = require('./routes');

app.use(api);

module.exports = app

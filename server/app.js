const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

module.exports = app;

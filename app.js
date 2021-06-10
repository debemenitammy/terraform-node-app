const express = require('express');
const fs = require('fs');
const storeRoute = require('./route/storeRoute');
const app = express();

app.use(express.json());    
app.use('/api/store', storeRoute);

module.exports = app;
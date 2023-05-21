var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var cors = require('cors');
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
});

const app = express()
app.use(cors())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Your API key is ${textapi._options.application_key}`)
    console.log('Example app listening on port 8081!')
})
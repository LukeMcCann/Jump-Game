'use strict';

const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});



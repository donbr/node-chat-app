const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

// app
var app = express();

app.use(express.static(publicPath));

// listen on port
app.listen(port, () => console.log(`listening on port ${port}!`) );

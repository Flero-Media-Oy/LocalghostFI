const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 2424;

app.listen(port, () => {
    console.log("LocalghostFI API toimii portissa: " + port);
});


// API:n pohja ja tynkä. 

//(c) LocalghostFI, https://localghost.fi, contact@localghost.fi, Author: Atte O. / Mixerboy24

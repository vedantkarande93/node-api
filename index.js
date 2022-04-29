const express = require('express'); //Framework use to develop Node.Js Application
const bodyParser = require('body-parser'); //for read the data from body of the request

const router = require('./router/index') //route file to maintain main routes like user

const app = express(); // express Application

// PORT number will be taken from environment variable or 3000
const PORT = process.env.PORT || 3000; 

// Middleware
// It allows on application-json of content type
app.use(bodyParser.json());

// Calling router function and passing app variable
router(app)

//To start a server, we need to provide port
app.listen(PORT, function() {
    console.log('Server has started at', PORT)
})
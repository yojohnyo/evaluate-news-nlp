const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
var aylien = require("aylien_textapi");
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.post('/test', formData)


function formData(req, res) {
    let data = req.body.formText
    console.log(data);
    textapi.sentiment({
        'text': data
    }, function(error, response) {
        if (error === null) {
            res.send(response)
            console.log(response);
        }
    });
}

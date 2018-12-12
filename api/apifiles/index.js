var express = require('express');
var bodyParser = require('body-parser');
// Constants
const PORT = 8080;
// App
var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello world\n');
});

app.post('/sensors/', function(request, response){
    var id = Math.floor((Math.random() * 100) + 1); // generate random id
    request.body.sensorid = id;
    response.send(request.body);    // send response JSON with id
});

app.post('/sensors/:id/values/', function(request, response){
    response.send(200);
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;

var tweetController = require('./controllers/tweet');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '../client')));

// app.use('/', tweetController);

app.get('/saurav', function(request, response) {
    response.send({name:"Saurav", age:24});
});


app.get('/*', function(request, response) {
    response.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, function(error) {
    if(!error) {
        console.log('Server is running at http://localhost:%s/ ', port);
        return;
    } else {
        console.log('Unable to initialize server at port %s, the server has thrown following error[%s]',port, error);
    }
});

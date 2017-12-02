var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to my first API'});
});

router.get('/timestamp/:timestamp', function (req, res) {
    if (new Date(req.params.timestamp).getTime() / 1000) {
        res.json(
            {
                timestamp: new Date(req.params.timestamp).getTime() / 1000,
                date: req.params.timestamp
            }
        )
    }

    else if (new Date(req.params.timestamp * 1000) !== "Invalid Date") {
        res.json(
            {
                timestamp: req.params.timestamp,
                date: new Date(req.params.timestamp * 1000).toLocaleString()
            })
    }

    else {
        res.json({timestamp: null, date: null})
    }

});


app.use('/api', router);

app.listen(port);
console.log("Magic happens on port " + port);
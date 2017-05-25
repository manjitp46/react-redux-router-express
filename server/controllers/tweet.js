var router = require('express').Router();
var TweetModel = require('../models/tweet');

router.get("/fetchTweet", function(req, res) {
    TweetModel.fetchTweet(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
})

module.exports = router;
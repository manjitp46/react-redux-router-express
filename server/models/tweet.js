var data = [{
    "text": "OMG my first tweet!",
    "id": "5783d9c3917a640100f1890e"
}, {
    "text": "My life is the best...no the worst...OMG",
    "id": "5783d9ed917a640100f1890f"
}, {
    "id": "5862ec89539650010022f295",
    "text": "Tweeting tweets .. tweet .. tweet"
}];
module.exports = {
    fetchTweet: function(cb) {
    	cb(null, data)
    }
}
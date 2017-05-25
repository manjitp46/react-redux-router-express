import axios from "axios";

// import * as tweets from "./tweetsActions";

export function fetchTweets() {
    console.log('fetchTweets');
    return function(dispatch) {
        /*axios.get("http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({
                    type: "FETCH_TWEETS_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_TWEETS_REJECTED",
                    payload: err
                })
            })*/
        // console.log(document.location);
        // console.log(window.location);
        let api = document.location.hostname+":"+document.location.port;
        axios.get("http://"+api+"/fetchTweet")
            .then((response) => {
                dispatch({
                    type: "FETCH_TWEETS_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_TWEETS_REJECTED",
                    payload: err
                })
            })
    }
}
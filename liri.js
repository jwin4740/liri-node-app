var twitterObj = require("./keys.js");
var Twitter = require('twitter');
console.log("\n----------------------------------------");
var twitterCreds = twitterObj.twitterKeys;

var client = new Twitter(twitterCreds);

var recentTweets = process.argv[2];
var params = { screen_name: 'jwin4740' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    	var numTweets = tweets[0].user.statuses_count;
        if (recentTweets === "my-tweets") {
            for (var i = 0; i < numTweets; i++) {
                console.log("Tweet " + i + ": " + tweets[i].text);
            }
        } else {
            console.log("please use the argument 'my-tweets'");
        }

    }
});

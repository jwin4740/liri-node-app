// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`




// var twitterObj = require("./keys.js");
// var Twitter = require('twitter');
// console.log("\n----------------------------------------");
// var twitterCreds = twitterObj.twitterKeys;

// var client = new Twitter(twitterCreds);

// var recentTweets = process.argv[2];
// var params = { screen_name: 'jwin4740' };
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//     	var numTweets = tweets[0].user.statuses_count;
//         if (recentTweets === "my-tweets") {
//             for (var i = 0; i < numTweets; i++) {
//                 console.log("Tweet " + i + ": " + tweets[i].text);
//             }
//         } else {
//             console.log("please use the argument 'my-tweets'");
//         }

//     }
// });


// node liri.js spotify-this-song '<song name here>'
// * This will show the following information about the song in your terminal/bash window
//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from

// * if no song is provided then your program will default to
//     * "The Sign" by Ace of Base

var spotify = require('spotify');
var song = process.argv[2];
 
spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else {
        console.log(JSON.stringify(data, null, 2));
    }
});
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




// var spotify = require('spotify');
// var song = process.argv[2];
 
// spotify.search({ type: 'track', query: song }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//     else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// node liri.js movie-this '<movie name here>'
// * This will output the following information to your terminal/bash window:

//     * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.
//     * Rotten Tomatoes Rating.
//     * Rotten Tomatoes URL.

// * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//     * If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
//     * It's on Netflix!

var movieDb = require('moviedb')('e2ed728c3fe73289f9fa629969bcf3a1');
var userQuery = process.argv[2];

// use moviedb API instead

movieDb.searchMovie({query: userQuery }, function(err, res){
  console.log(res);
});



  * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.
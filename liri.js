// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************

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

// * This will show the following information about the song in your terminal/bash window
//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from

// * if no song is provided then your program will default to
//     * "The Sign" by Ace of Base
spotifyCommand();
function spotifyCommand() {
    var spotify = require('spotify');
    var song = process.argv[2];

    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
            // console.log(data.tracks.items[0].artists.external_urls);
            // console.log(data.tracks.items[0].artists);
        }
    });
}

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

// var movieDb = require('moviedb')('e2ed728c3fe73289f9fa629969bcf3a1');
// var userQuery = process.argv[2];

// use moviedb API instead

// movieDb.searchMovie({ query: userQuery }, function(err, res) {
//     console.log(res.results[0]);
//     console.log(res.results[0].original_title);
//     console.log("------------------------");
//     console.log(res.results[0].overview);
//     // console.log(JSON.stringify(res, null, 2));
// });

// movieDb.movieSimilar({ query: userQuery, tomatoes: true }, function(err, res) {
//     console.log(res);

//     // console.log(JSON.stringify(res, null, 2));
// });

// /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

// * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
//   * Rotten Tomatoes Rating.
//   * Rotten Tomatoes URL.


// var omdb = require('omdb');

// omdb.search('saw', function(err, movies) {
//     if (err) {
//         return console.error(err);
//     }

//     if (movies.length < 1) {
//         return console.log('No movies were found!');
//     }

//     movies.forEach(function(movie) {
//         console.log('%s (%d)', movie.title, movie.year);
//     });
// });

// // As always, we grab the fs package to handle read/write

// console.log(process.argv);
// // We then store the textfile filename given to us from the command line
// var textFile = process.argv[2];

// // We then append the contents "Hello Kitty" into the file
// // If the file didn't exist then it gets created on the fly.
// fs.appendFile(textFile, "Hello Kitty", function(err) {

//   // If an error was experienced we say it.
//   if (err) {
//     console.log(err);
//   }

//   // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//   else {
//     console.log("Content Added!");
//   }

// });

// fs is an NPM package for reading and writing files
// var fs = require("fs");

// // This block of code will read from the "movies.txt" file.
// // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// // The code will store the contents of the reading inside the variable "data"
// fs.readFile("random.txt", "utf8", function(error, data) {
//     // the first parameter is always an error which gets sets to null if there is no error
//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)


//     // We will then re-display the content as an array for later use.
// });

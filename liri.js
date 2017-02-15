// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************


var argumentTwo = process.argv[2];
var argumentThree = process.argv[3];

if (argumentTwo === "my-tweets") {

    var twitterObj = require("./keys.js");
    var Twitter = require('twitter');
    console.log("\n\n");


    var twitterCreds = twitterObj.twitterKeys;

    var client = new Twitter(twitterCreds);

    var recentTweets = argumentTwo;
    var params = { screen_name: 'jwin4740' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        // console.log(tweets);
        // console.log(JSON.stringify(response));
        if (!error) {
            var numTweets = tweets[0].user.statuses_count;

            for (var i = 19; i >= 0; i--) {
                console.log("TWEET: " + tweets[i].text + "\n(created at " + tweets[i].created_at + ")");
                console.log("------------------------------------------------------------------------------------------------------------\n");

            }
        }
    });
}
if (argumentTwo === "do-what-it-says") {
    readRandom();
}


function readRandom() {
    var fs = require("fs");

    // This block of code will read from the "movies.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data) {
        // the first parameter is always an error which gets sets to null if there is no error
        // We will then print the contents of data


        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        var randNum = Math.floor(Math.random() * 10 + 1);
        var randSong = dataArr[randNum];
        spotifyCommand(randSong);

        // We will then re-display the content as an array for later use.
    });
}

// * This will show the following information about the song in your terminal/bash window
//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from

// * if no song is provided then your program will default to
//     * "The Sign" by Ace of Base
if (argumentTwo === "spotify-this-song") {
    var song = process.argv[3];
    spotifyCommand(song);
}

function spotifyCommand(song) {
    var spotify = require('spotify');


    // if (song != null) {
    //     spotify.search({ type: 'track', query: song }, function(err, data) {
    //         if (err) {
    //             console.log('Error occurred: ' + err);
    //             return;
    //         } else {
    //             console.log(data.tracks);
    //             console.log("---------------------------------");
    //             console.log("ARTIST NAME: " + data.tracks.items[0].album.artists[0].name);
    //             console.log("SONG NAME: " + data.tracks.items[0].name);
    //             console.log("SONG PREVIEW URL: " + data.tracks.items[0].preview_url);
    //             console.log("ALBUM NAME: " + data.tracks.items[0].album.name);
    //             console.log(data.tracks.items[0].artists);

    //         }
    //     });
    // }


    if (2 === 2) {
        spotify.lookup({ type: 'track', id: "0hrBpAOgrt8RXigk83LLNE" }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {

                console.log("\nSONG NAME: " + data.name);
                console.log("ALBUM: " + data.album.name);
                console.log("ARTIST: " + data.artists[0].name);
                console.log("SONG PREVIEW URL: " + data.preview_url);

            }
        });
    }
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
if (argumentTwo === "movie-this") {
    getMovieInfo(argumentThree);

}

function getMovieInfo(movie) {

    var movieDb = require('moviedb')('e2ed728c3fe73289f9fa629969bcf3a1');




    // movieDb.searchMovie({ query: movie }, function(err, res) {
    //     console.log(res.results);
    //     console.log("------------------------");
    //     console.log("\n" + res.results[0].original_title + "\n");
    //     console.log("RELEASE DATE: " + res.results[0].release_date);
    //     console.log("RATING: " + res.results[0].vote_average);
    //     console.log("PLOT SUMMARY: " + res.results[0].overview);
    //     // console.log(JSON.stringify(res, null, 2));
    // });

    // the shining id is 694
    movieDb.movieSimilar({ query: "the shining" + 694 }, function(err, data) {

        console.log("------------------------");
        console.log(data);
        // console.log(JSON.stringify(res, null, 2));
    });


}
// if (argumentTwo === "movie-this") {
//     movieThis(argumentThree);
// }

// function movieThis(title) {
//     // get movie by title 
//     var movie = require('node-movie');
//     movie(title, function(err, data) {
//         console.log(data);
//     });
// }


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

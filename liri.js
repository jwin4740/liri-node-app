//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************
//COMMENT CODE ********************************************************


var argumentTwo = process.argv[2];
var argumentThree = process.argv[3];
switch (argumentTwo) {
    case 'my-tweets':
        getMyTweets();
        break;

    case 'spotify-this-song':
        spotifyCommand(argumentThree);
        break;

    case 'movie-this':
        getMovieInfo(argumentThree);
        break;
    case 'do-what-it-says':
        readRandom();
        break;
    case 'do-what-it-says':
        fireError();
        break;
}


function getMyTweets() {
    var twitterObj = require("./keys.js");
    var Twitter = require('twitter');
    var twitterCreds = twitterObj.twitterKeys;
    var user = new Twitter(twitterCreds);
    var recentTweets = argumentTwo;
    console.log("\n\n");
    var params = { screen_name: 'jwin4740' };
    user.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 19; i >= 0; i--) {
                console.log("TWEET (" + (i + 1) + "): " + tweets[i].text + "\n(created at " + tweets[i].created_at + ")");
                console.log("\n------------------------------------------------------------------------------------------------------------\n");
            }
        }
    });
}



function readRandom() {
    var fs = require("fs");

    // This block of code will read from the "movies.txt" file.
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


function spotifyCommand(song) {
    var spotify = require('spotify');



    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            console.log(data.tracks);
            console.log("---------------------------------");
            console.log("ARTIST NAME: " + data.tracks.items[0].album.artists[0].name);
            console.log("SONG NAME: " + data.tracks.items[0].name);
            console.log("SONG PREVIEW URL: " + data.tracks.items[0].preview_url);
            console.log("ALBUM NAME: " + data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].artists);

        }
    });
}


if (process.argv === 2) {
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


function getMovieInfo(movie) {

    var movieDb = require('moviedb')('e2ed728c3fe73289f9fa629969bcf3a1');
    movieDb.searchMovie({ query: movie }, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("------------------------");
            console.log("\nMOVIE TITLE: " + res.results[0].original_title);
            console.log("RELEASE DATE: " + res.results[0].release_date);
            console.log("RATING: " + res.results[0].vote_average);
            console.log("PLOT SUMMARY: " + res.results[0].overview);
        }
    });
}




// we grab the fs package to handle append functionality
var fs = require("fs");

// We then store the textfile filename given to us from the command line

function recordData(command, data) {
    // We then append the contents "Hello Kitty" into the file
    // If the file didn't exist then it gets created on the fly.
    fs.appendFile("log.txt", command + data, function(err) {

        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        }

        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
            console.log("Content Added!");
        }
    });
}

// error fires if invalid command
function fireError() {
    if (argumentTwo != "my-tweets" || argumentTwo != "spotify-this-song" || argumentTwo != "movie-this" || argumentTwo != "do-what-it-says") {
        console.log("ERROR: INVALID COMMAND\n\nPlease choose one of the following:\n1) 'my-tweets'\n2) 'spotify-this-song'\n3) 'movie-this'\n4) 'do-what-it-says'");

    }
}

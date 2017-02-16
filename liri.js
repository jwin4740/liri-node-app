// takes user arguments and stores them in variables
var argumentTwo = process.argv[2];
var argumentThree = process.argv[3];


// switch statement is used to run the appropriate function based on user input
// if user input is incorrect an error will be fired to the console
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
    default:
        fireError();
}

// grabs the authentication information from the keys.js file and call the twitter api
// to retrieve my 20 most recent tweets
function getMyTweets() {
    var twitterObj = require("./keys.js");
    var Twitter = require('twitter');
    var twitterCreds = twitterObj.twitterKeys;
    var user = new Twitter(twitterCreds);
    var recentTweets = argumentTwo;
    console.log("\n\n");
    var params = { screen_name: 'jwin4740' };
    user.get('statuses/user_timeline', params, function(error, tweets, response) {

        // if no error occurs a for loop will console log each tweet
        if (!error) {
            for (var i = 19; i >= 0; i--) {
                console.log("TWEET (" + (i + 1) + "): " + tweets[i].text + "\n(created at " + tweets[i].created_at + ")");
                console.log("\n------------------------------------------------------------------------------------------------------------\n");
            }

            // call the function which logs the command and timestamp to log.txt file
            recordData(argumentTwo, " ");
        }
    });
}


// This block of code will read from the "random.txt" file.
// The code will store the contents of the reading inside the variable "data"
function readRandom() {
    var fs = require("fs");
    fs.readFile("random.txt", "utf8", function(error, data) {
        // the first parameter is always an error which gets sets to null if there is no error

        var dataArr = data.split(",");
        var randNum = Math.floor(Math.random() * 10 + 1);
        var randSong = dataArr[randNum];
        argumentThree = randSong;

        spotifyCommand(argumentThree); // calls the spotify-this-song function with the random song
    });
}

function spotifyCommand(song) {
    var spotify = require('spotify');
    if (argumentThree) {
        spotify.search({ type: 'track', query: song }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                console.log("---------------------------------");
                console.log("ARTIST NAME: " + data.tracks.items[0].album.artists[0].name);
                console.log("SONG NAME: " + data.tracks.items[0].name);
                console.log("SONG PREVIEW URL: " + data.tracks.items[0].preview_url);
                console.log("ALBUM NAME: " + data.tracks.items[0].album.name);
            }
        });
    }

    // If the user doesn't type a song in, "The Sign by Ace of Base" is returned to console
    else {

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
    if (argumentThree) {
        recordData(argumentTwo, argumentThree);
    } else {
        recordData(argumentTwo, "The Sign by Ace of Base");
    }

}


function getMovieInfo(movie) {

    var movieDb = require('moviedb')('e2ed728c3fe73289f9fa629969bcf3a1');
    if (argumentThree) {
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
    // If the user doesn't type a movie in, "Mr. Nobody" info is returned to console
    else {
        movieDb.searchMovie({ query: "Mr. Nobody" }, function(err, res) {
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
    if (argumentThree) {
        recordData(argumentTwo, argumentThree);
    } else {
        recordData(argumentTwo, "Mr. Nobody");
    }
}


// function records commands and timestamp to log.txt file
function recordData(argumentTwo, argumentThree) {
    var moment = require('moment');
    var fs = require("fs");
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    // We then append the command ran and timestamp into the log.txt file
    fs.appendFile("log.txt", "COMMAND: " + argumentTwo + " " + argumentThree + "\nTIMESTAMP: " + time + "\n\n", function(err) {

        // If an error was experienced we console log it.
        if (err) {
            console.log(err);
        }

        // If no error is experienced, we'll log the phrase "Content Added to log.txt" to our node console.
        else {
            console.log("Content Added to log.txt!");
        }
    });
}

// error fires if invalid command prompting user to use one of the four methods with correct syntax
function fireError() {
    if (argumentTwo != "my-tweets" || argumentTwo != "spotify-this-song" || argumentTwo != "movie-this" || argumentTwo != "do-what-it-says") {
        console.log("ERROR: INVALID COMMAND\n\nPlease choose one of the following commands:\n1) 'my-tweets'\n2) 'spotify-this-song'\n3) 'movie-this'\n4) 'do-what-it-says'");

    }
    recordData("Error fired");
}

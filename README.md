# liri-node-app   James J Winkle

liri is a language interpretation node application

node liri.js 'my-tweets'
-- will return a list of my past 20 tweets

node liri.js 'spotify-this-song' <'song name'>
-- requires a song name as the third argument and returns information about the searched song

node liri.js 'movie-this' <'movie name'>
-- requires a movie name as the third argument and returns information about that movie.
NOTE: OMDB api is inconsistent so the API used here 'movieDB' does not return as comprehensive movie data

node liri.js 'do-what-it-says'
-- will return a random song from a pregenerated .txt file and use the spotify api to retrieve track information


BONUS FEATURE: Every search command and timestamp will be logged to the log.txt file



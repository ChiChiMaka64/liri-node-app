require("dotenv").config();
// add code required to import the keys.js file and store it in a variable. ????????????????????????????????????

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var song_name
var command= process.argv[2];

// Make it so liri.js can take in one of the following commands:


// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// ???????????????????
if (command=='movie-this'){
    console.log(command);
    moviethis();
}
function mytweets(){

}
function spotifythissong(song_name) {
/*
This will show the following information about the song in your terminal/bash window


Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


If no song is provided then your program will default to "The Sign" by Ace of Base.
*/
}

function moviethis() {
    // You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
//     This will output the following information to your terminal/bash window:

//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.


// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

// It's on Netflix!
}

function dowhatitsays() {

}
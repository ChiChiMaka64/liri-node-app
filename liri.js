require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
// add code required to import the keys.js file and store it in a variable. ????????????????????????????????????
var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);
var song_name = process.argv[3];
var tweet = process.argv[3];
var doIT = process.argv[3];

var command = process.argv[2];
var movie_name = process.argv[3];

// Make it so liri.js can take in one of the following commands:


// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// ???????????????????
if (command == 'movie-this') {
    console.log(command);
    moviethis(movie_name);
}
if (command == 'my-tweets') {
    console.log(command);
    mytweets(tweet);
}
if (command == 'spotify-this-song') {
    console.log(command);
    spotifythissong(song_name);
}

if (command == 'do-what-it-says') {
    console.log(command);
    dowhatitsays(doIT);
}

function mytweets(tweet) {
    var params = {
        screen_name: "Drumslco"
    }
    twitter.get('statuses/user_timeline', params, function (error, tweets, response) {
        console.log(tweets);
        if (!error && response.statusCode === 200) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].user.screen_name);
                console.log(tweets[i].text);
            }

        }
        else {
            console.log(error);
        }


    });
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
    spotify.search({ type: 'track', query: song_name, limit: 5 }, function (error, response) {
        console.log("Reaponse is:" + response);
        var jsonData = JSON.parse(response);
         console.log("Response is:" +jsonData);

    });


}

function moviethis(movie_name) {
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

    request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Title:" + JSON.parse(body).Title);
            console.log("Year:" + JSON.parse(body).Year);
            console.log("IMDBRating:" + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating:" + JSON.parse(body).Ratings[1].Value);
            console.log("Country:" + JSON.parse(body).Country);
            console.log("Language:" + JSON.parse(body).Language);
            console.log("Plot:" + JSON.parse(body).Plot);
            console.log("Actors:" + JSON.parse(body).Actors);
        }
    });//end of request function
}

function dowhatitsays() {
    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
}
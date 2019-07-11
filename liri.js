require("dotenv").config();
var keys = require("./keys");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var request = require("request");




var command = process.argv[2];

//CONCERT-THIS
if (command === "concert-this") {
    
    //put artist in searchable query
    var artist = "";

    for (var i=3; i < process.argv.length; i++) {
        if (artist === "") {
            artist += process.argv[i] ;
        }
        else {
            artist = artist + " " + process.argv[i];
        }
    }
    // && response.statusCode
    //search the api
    var artistSearch = function(artist) {
        request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, data, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', data); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        });
            
            //   //checks if something returns
            // if (data.tracks.items.length != 0) {

            //     console.log("\nArtist(s): ");
            //     for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
            //         console.log(data.tracks.items[0].artists[i].name);
            //     }
    
    
            // console.log("\nSong: ");
            // console.log(data.tracks.items[0].name);
            
            // console.log("\nPreview Link: ");
            // console.log(data.tracks.items[0].preview_url);
    
            // console.log("\nAlbum: ");
            // console.log(data.tracks.items[0].album.name);
            // console.log("");
            // }

            // //recur with Ace of Base if no results
            // else {
            //     songSearch("Ace of Base");
            // }
    }

    artistSearch(artist);

}   


//SPOTIFY-THIS-SONG
if (command === "spotify-this-song") {
    
    //put song in searchable query
    var song = "";

    for (var i=3; i < process.argv.length; i++) {
        if (song === "") {
            song += process.argv[i] ;
        }
        else {
            song = song + " " + process.argv[i];
        }
    }
    
    //search the api
    var songSearch = function(song) {
        spotify.search({type: "track", query: song}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
              }
            
            
              //checks if something returns
            if (data.tracks.items.length != 0) {

                console.log("\nArtist(s): ");
                for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
                    console.log(data.tracks.items[0].artists[i].name);
                }
    
    
            console.log("\nSong: ");
            console.log(data.tracks.items[0].name);
            
            console.log("\nPreview Link: ");
            console.log(data.tracks.items[0].preview_url);
    
            console.log("\nAlbum: ");
            console.log(data.tracks.items[0].album.name);
            console.log("");
            }

            //recur with Ace of Base if no results
            else {
                songSearch("Ace of Base");
            }
        });
    }

    songSearch(song);

}   


//MOVIE-THIS
if (command === "movie-this") {

    //put song in searchable query
    var movie = "";

    for (var i=3; i < process.argv.length; i++) {
        if (movie === "") {
            movie += process.argv[i] ;
        }
        else {
            movie = movie + " " + process.argv[i];
        }
    }

  //search the api
var movieSearch = function(movie) {

axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

      //checks if something returns
    if (response.data.Response != "False") {
    console.log("\nTitle: ");
    console.log(response.data.Title);

    console.log("\nRelease Year: ");
    console.log(response.data.Year);

    console.log("\nIMDB Rating: ");
    console.log(response.data.imdbRating);

    console.log("\nRotten Tomatoes Rating: ");
    console.log(response.data.Ratings[1].Value);

    console.log("\nCountry produced: ");
    console.log(response.data.Country);

    console.log("\nLanguage: ");
    console.log(response.data.Language);

    console.log("\nPlot: ");
    console.log(response.data.Plot);

    console.log("\nActors: ");
    console.log(response.data.Actors + "\n");
    }

     //recur with Mr. Nobody if no results
    else {
        movieSearch("Mr. Nobody");
    }

  }) 
  //checks for errors
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

//     }

}

movieSearch(movie);
}


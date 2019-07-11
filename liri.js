require("dotenv").config();
var keys = require("./keys");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);



var command = process.argv[2];

//spotify-this-song
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
    var search = function(song) {
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
                console.log("IS THIS WORKING?");
                search("Ace of Base");
            }
        });
    }

    search(song);

}   
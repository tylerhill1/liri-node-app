# liri-node-app
Summary: Diving into Node to create a LIRI that will call various packages and APIs to return what the client requests.

Problem the app will attempt to solve: Similar to SIRI, the app will take in written commands and print out movie, concert, and song information accordingly. This gives the user a quick reference to get info about their favorite bits of pop culture.

How the code is organized: The app is organized into four different if statements based on the four commands that LIRI accepts:
  1. spotify-this-song
  2. concert-this
  3. movie-this
  4. do-what-it-says
Each of the first three commands takes in the words after it as the song, artist, or movie respectively, and requests an API with corresponding information. The console then logs the most relevant information from the API JSON response. The do-what-it-says command will read the random.txt file, which includes a command in combination with a song, artist, or movie, and then points the program to the appropriate section of code that will run that command.

Instructions on how to run the app:
  Navigate to the folder liri-node-app. Then type into the command-line any of the following:
    node liri.js spotify-this-song <song name>
    node liri.js concert-this <artist name>
    node liri.js movie-this <movie name>
    node liri.js do-what-it-says
  You should receive back the relevant information based on your request. The random.txt file initially has
  spotify-this-song,"I Want it That Way" written to it, so you should receive back that song's information.

Videos to show functionality: 
https://drive.google.com/file/d/1didfXwf4R2h2ayF8JdHa6OwlaBhpIVqH/view
https://drive.google.com/file/d/1o_qIiqoBFvNNkn5DIAR2YYHnO8W-_E-a/view

Link to deployed version of app:  https://tylerhill1.github.io/liri-node-app/

Technologies used in app:
node.js
axios (requests from bandsintown api and omdb api)
moment
dotenv
node-spotify-api
fs

I fully developed this app from start to finish.

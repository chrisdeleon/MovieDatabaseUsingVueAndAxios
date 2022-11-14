/*
* Chris de Leon
* 11/14/2022
* CIS131 - Movie Database Using Vue.js
*/
var movieArray = []; // initialize empty array to store API objects

function getData(){ // function returns information from TMDB API using axios
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eb5fafc9ff4aaca27543575afba0e08a&language=en-US&page=1") // get request
    .then (function (response){ // function for returning results of promise
         // displays result of promise in console
        movieArray = response.data.results; // stores API objects in empty array
        console.log(movieArray);
    })
}

getData(); // calls the function


var app = new Vue({ // new instance of Vue
    el : "#app", // selects tag with id of app from element
    data : {     // a property we can have access to, have to be exactly that. This is an object
        // within the data object you can create your own properties
        pageTitle : "Upcoming Movies",
        items : [
            {title: "movie 1", overview: "test overview", imagePath: "testpath"},
            {title: "movie 2", overview: "test overview 2", imagePath: "testpath 2"},
            {title: "movie 3", overview: "test overview 3", imagePath: "testpath 3"}

        ]
    },
    methods: {
        movieLoad(){
            for (var i = 0; i < movieArray.length; i++){
                this.movieTitle = movieArray[i].title;
                this.movieTitle = movieArray[i].poster_path;
                this.movieTitle = movieArray[i].overview;
            }
            console.log(movieArray[0].title); // displays movie title
        }
    }
})




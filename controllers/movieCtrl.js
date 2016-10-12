var movies = require('../movies.json');

module.exports = {
    get: function(req, res, next){
      // http://localhost:3000/api/movies?page=18&pageSize=24
      var page = (req.query.page || 1) / 1;
      var pageSize = (req.query.pageSize || 20) / 1;
      var startIndex = (page - 1) * pageSize;

      var first20Movies = movies.slice(startIndex, startIndex + pageSize);
      res.send(first20Movies);
    },

    getById: function(req, res, next) {
      // http://localhost:3000/api/movies/372
      var movieId = req.params.movieId;
      var movie = movies[movieId];

      var responseObj = {
        message: "You asked for movie ID " + movieId,
        movie: movie
      }

      res.send(responseObj);
    },

    modify: function(req, res, next){
      // What to Modify
      var movieId = req.params.movieId;
      // What data to change it to
      // http://localhost:3000/api/movies/272?Worldwide_Gross=20000

      // Get movie to modify
      var movieToModify = req.query.movieToModify;
      // for every property in req.query
      for (var p in req.query) {
        // if property is legit(hasOwnProperty) on query and on movieToModify
        if (req.query.hasOwnProperty(p) && movieToModify.hasOwnProperty(p)) {
          // update movie to modify
          movieToModify[p] = req.query[p];
        }
      }

    },

    add: function(req, res, next){
      movies.push(req.body);
      res.status(200).end();
    },

    delete: function(req, res, next){
      movies.splice(req.params.movieId, 1);
      res.status(200).end();
    }
}

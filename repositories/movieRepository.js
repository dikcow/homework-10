const Movie = require("../models/movie.js");

class MovieRepository {
  static findMovies = async (next) => {
    try {
      return Movie.getMovies(next);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      return Movie.findById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      return Movie.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return Movie.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (params, next) => {
    try {
      return Movie.updateMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      return Movie.deleteMovie(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieRepository;

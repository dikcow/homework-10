const MovieRepository = require("../repositories/movieRepository.js");

class MovieService {
  static findMovies = async (next) => {
    try {
      return MovieRepository.findMovies(next);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    try {
      return MovieRepository.findById(id, next);
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      return MovieRepository.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return MovieRepository.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (params, next) => {
    try {
      return MovieRepository.updateMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      return MovieRepository.deleteMovie(id, next);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieService;

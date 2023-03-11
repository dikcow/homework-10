const MovieService = require("../services/movieServices.js");

class MovieController {
  static findMovies = async (req, res, next) => {
    try {
      const data = await MovieService.findMovies(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieService.findById(id, next);
      if (data) {
        res.status(200).json(data);
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const data = await MovieService.createMovie(req.body, next);

      res.status(201).json({
        message: "Create Movies Successfully",
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const data = await MovieService.createUser(req.body, next);

      res.status(201).json({
        message: "Create Users Successfully",
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const { title, year, genres } = req.body;
      const { id } = req.params;
      const params = { title, year, genres, id };
      const data = await MovieService.updateMovie(params, next);
      if (data) {
        res.status(200).json({
          message: "Update Successfully",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await MovieService.deleteMovie(id, next);
      if (data) {
        res.status(200).json({
          message: "Delete Successfully",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;

const pool = require("../config/config.js");

class Movie {
  static getMovies = async (next) => {
    const findQuery = `
      SELECT
        *
      FROM movies;
    
    `;
    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    const findQuery = `
      SELECT
        *
      FROM movies
      WHERE id = $1
    `;
    try {
      const data = await pool.query(findQuery, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      const { id, title, genres, year } = params;
      const insertQuery = `
        INSERT INTO movies (id, title, genres, year)
          VALUES 
            ($1, $2, $3, $4)
        RETURNING *
      `;

      const data = await pool.query(insertQuery, [id, title, genres, year]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      const { id, email, gender, password, role } = params;
      const insertQuery = `
        INSERT INTO users (id, email, gender, password, role)
          VALUES 
            ($1, $2, $3, $4, $5)
        RETURNING *
      `;

      const data = await pool.query(insertQuery, [id, email, gender, password, role]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (params, next) => {
    try {
      const { title, genres, year, id } = params;
      const updateMovie = `
        UPDATE movies
          SET title = $1,
              genres = $2,
              year = $3
          WHERE id = $4
          RETURNING *
      `;
      const data = await pool.query(updateMovie, [title, genres, year, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const deleteQuery = `
        DELETE FROM movies
        WHERE id = $1
        RETURNING *
      `;

      const data = await pool.query(deleteQuery, [id]);

      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;

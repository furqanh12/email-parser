const { Sequelize } = require("sequelize");

// Setting up SQLite database connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // SQLite file location
});

module.exports = sequelize;

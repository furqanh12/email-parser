const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Import models
const Ticket = require("./ticket")(sequelize);

// Define the db object
const db = {
  sequelize,
  Sequelize,
  Ticket,
};

module.exports = db;

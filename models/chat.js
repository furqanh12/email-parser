const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Ticket = require("./ticket");

// Define the Chat model
const Chat = sequelize.define("Chat", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ticketId: {
    type: DataTypes.INTEGER,
    references: {
      model: Ticket,
      key: "id",
    },
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
});

module.exports = Chat;

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Ticket extends Model {}

  Ticket.init(
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      senderEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );

  return Ticket;
};

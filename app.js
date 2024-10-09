const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Ticket } = require("./models"); // Importing models and sequelize

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define the route
app.post("/email", async (req, res) => {
  try {
    const { subject, body, senderEmail } = req.body;

    if (!subject || !body || !senderEmail) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newTicket = await Ticket.create({
      subject,
      body,
      senderEmail,
    });

    res.status(201).json({
      message: "Ticket created successfully",
      ticket: newTicket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Sync database and start the server
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced!");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync the database:", err);
  });

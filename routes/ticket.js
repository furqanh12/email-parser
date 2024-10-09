const express = require("express");
const { Ticket, Chat } = require("../models");
const router = express.Router();

// POST route to simulate an incoming email and create a ticket
router.post("/email", async (req, res) => {
  try {
    const { subject, body, senderEmail } = req.body;

    // Create a new ticket in the database
    const ticket = await Ticket.create({
      subject,
      body,
      senderEmail,
    });

    // Simulate a chat log entry for this ticket
    await Chat.create({
      ticketId: ticket.id,
      message: body,
      sender: "customer",
    });

    res.status(201).json({
      message: "Ticket created successfully!",
      ticket,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create ticket" });
  }
});

module.exports = router;

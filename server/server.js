require("dotenv").config();
const express = require("express");
const booksHandler = require("./api/books");
const cardsHandler = require("./api/cards");

const app = express();
const PORT = 8080;

// Test route to check server is running
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Routes for API endpoints
app.get("/api/books", booksHandler);
app.get("/api/cards", cardsHandler);

// Start the server locally
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const { cards, books } = require("./data.js");

app.use(cors());

app.get("/api/cards", (req, res) => {
  res.json(cards);
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

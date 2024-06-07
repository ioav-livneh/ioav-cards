const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

app.get("/api/quotes", (req, res) => {
  res.json([
    {
      quote:
        "The only spiritual exercise worth practicing is to be aware in every context, at all times and whatever, creditable or discreditable, pleasant or unpleasant, you may be doing or suffering",
      author: ["Aldous Huxley"],
      topic: ["Awareness"],
      book: "Island",
      pageNumber: 42,
    },
    {
      quote:
        "You are your fate. There is no one either to master it or to be mastered, to rule or to surrender",
      author: ["Alan Watts"],
      topic: ["Acceptance", "Self", "Fate"],
      book: "The Wisdom of Insecurity",
      pageNumber: 148,
    },
    {
      quote:
        "'I must be myself. I won't hide my tastes or aversions. I will so trust that what is deep is holy, that I will do strongly before the sun and moon whatever inly rejoices me, and the heart appoints.' In Emerson, I saw someone unafraid of naked sincerity, willing to brave the severe light of judgment to express himself with the fire he had within.",
      author: ["Evan Puschak", "Ralph Waldo Emerson"],
      topic: ["Authenticity"],
      book: "Escape Into Meaning",
      pageNumber: 17,
    },
    {
      quote:
        "Test1 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is adghghd test ",
      author: ["", ""],
      topic: ["B"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test2 This is a test Thidjhfds is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["C"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test This is adgjfj test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is adgh test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test Thiskru is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This iyjtrds a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test Thuis is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test74 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 74This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 67This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 6This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test375 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test35 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test343 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test312 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 2This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
    {
      quote:
        "Test3 This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test ",
      author: ["", ""],
      topic: ["D"],
      book: "",
      pageNumber: null,
    },
  ]);
});

app.get("/api/books", (req, res) => {
  res.json([
    {
      title: "9781250758842",
      coverImage: "",
      link: "Winter's Orbit",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

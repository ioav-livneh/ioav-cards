require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// const cards = require("./cards.json");
const app = express();
const PORT = 8080;

app.use(cors());

app.use("/", (req, res) => {
  res.send("server is running.");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// const uri = process.env.MONGO_URI;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// let db;

// async function startServer() {
//   try {
//     await client.connect();
//     db = client.db("Commonplace");
//     console.log("Successfully connected to MongoDB!");

//     const cardsCollection = db.collection("cards");
//     const booksCollection = db.collection("books");

//     app.get("/api/cards", async (req, res) => {
//       try {
//         const agg = [
//           {
//             $match: {
//               visible: true,
//             },
//           },
//           {
//             $sort: {
//               topic: 1,
//             },
//           },
//         ];
//         const cards = await cardsCollection;
//         const cursor = cards.aggregate(agg);
//         const result = await cursor.toArray();
//         res.json(result);
//       } catch (error) {
//         // res.json(cards);
//         console.error("Error fetching cards:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     });

//     app.get("/api/books", async (req, res) => {
//       try {
//         const agg = [
//           {
//             $sort: {
//               dateAdded: 1,
//             },
//           },
//         ];
//         const books = await booksCollection;
//         const cursor = books.aggregate(agg);
//         const result = await cursor.toArray();
//         res.json(result);
//       } catch (error) {
//         console.error("Error fetching cards:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     });

//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit process if connection fails
//   }
// }

// startServer();

// // Handle graceful shutdown
// process.on("SIGINT", async () => {
//   console.log("Received SIGINT. Closing MongoDB connection...");
//   await client.close();
//   console.log("MongoDB connection closed.");
//   process.exit(0); // Exit process
// });

// process.on("SIGTERM", async () => {
//   console.log("Received SIGTERM. Closing MongoDB connection...");
//   await client.close();
//   console.log("MongoDB connection closed.");
//   process.exit(0); // Exit process
// });

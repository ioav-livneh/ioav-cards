const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const { cards, library } = require("./data.js");

app.use(cors());

app.get("/api/cards", (req, res) => {
  res.json(cards);
});

app.get("/api/books", (req, res) => {
  res.json(library);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ioav:123@cluster0.zhoz6bf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("Commonplace").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const db = await client.db("Commonplace");
    const cards = await db.collection(cards);

    cards.insertOne({ test: 1 });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

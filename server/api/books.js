const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = async (req, res) => {
  try {
    // Connect to the database
    await client.connect();
    const db = client.db("Commonplace");
    const booksCollection = db.collection("books");

    // Define the aggregation pipeline
    const agg = [
      {
        $sort: { dateAdded: 1 },
      },
    ];

    // Fetch the books
    const cursor = booksCollection.aggregate(agg);
    const result = await cursor.toArray();

    // Return the result as JSON
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the database connection
    await client.close();
  }
};

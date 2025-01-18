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
  // Add CORS headers to the response
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins or specify your domain instead of "*"
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Connect to the database
    await client.connect();
    const db = client.db("Commonplace");
    const cardsCollection = db.collection("cards");

    // Define the aggregation pipeline
    const agg = [
      {
        $match: { visible: true },
      },
      {
        $sort: { topic: 1 },
      },
    ];

    // Fetch the cards
    const cursor = cardsCollection.aggregate(agg);
    const result = await cursor.toArray();

    // Return the result as JSON
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Close the database connection
    await client.close();
  }
};

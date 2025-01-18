// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.MONGO_URI;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// let db;
// console.log("Starting function...");
// console.log("URI:", process.env.MONGO_URI);

// // Helper to connect to the database
// async function getDb() {
//   if (!db) {
//     await client.connect();
//     db = client.db("Commonplace");
//   }
//   return db;
// }

// module.exports = async (req, res) => {
//   try {
//     const db = await getDb();
//     const cardsCollection = db.collection("cards");

//     const agg = [
//       {
//         $match: { visible: true },
//       },
//       {
//         $sort: { topic: 1 },
//       },
//     ];
//     const cursor = cardsCollection.aggregate(agg);
//     const result = await cursor.toArray();
//     res.status(200).json(result);
//   } catch (error) {
//     console.error("Error fetching cards:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

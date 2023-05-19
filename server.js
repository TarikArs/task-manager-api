const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

/** Middleware */
app.use(cors());
app.use(express.json());

/** Connect to MongoDB */

const uri =
  "mongodb+srv://tariksalhiars:aufdVQpNTe4rqFeZ@cluster0.frraiph.mongodb.net/?retryWrites=true&w=majority";

  // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

connection.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit();
});

/** Routes */

/** Start server */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

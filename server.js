const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

/** Middleware */
app.use(cors());
app.use(express.json());

/** Connect to MongoDB */

const uri =
  "mongodb+srv://tariksalhiars:aufdVQpNTe4rqFeZ@cluster0.frraiph.mongodb.net/?retryWrites=true&w=majority";

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
const taskRoutes = require("./routes/TaskRoutes");
app.use("/tasks", taskRoutes);

/** Start server */
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

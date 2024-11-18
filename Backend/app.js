const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://infoan78:eGED4rntWO2g1DYo@cashier.9fcy3.mongodb.net/?retryWrites=true&w=majority&appName=Cashier",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Define a simple Mongoose model (example)
const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: String,
    description: String,
  }),
  "Product"
);

// API route to get data from MongoDB
app.get("/product", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(JSON.parse(items));
  } catch (error) {
    res.status(500).send("Error fetching items");
  }
});

// Route to render items.json
// app.get("/items-json", (req, res) => {
//   const filePath = path.join(__dirname, "data", "Product");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error reading Product");
//     }
//     res.json(JSON.parse(data));
//   });
// });

// Root route
app.get("/", (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      return res.status(500).send("Error reading Product");
    }
    res.status(200).send(data);
  });
  res.send("Server is up and running");
  //     if (err) {
  //       return res.status(500).send("Error reading Product");
  //     }
  //     res.json(JSON.parse(data));
  //   });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

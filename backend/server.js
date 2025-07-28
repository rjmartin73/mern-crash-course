import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

// Allows using .env configuration
dotenv.config();

const app = express();

app.use(express.json()); // middleware allows us to accept json in the req.body

// GET
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    console
      .status(500)
      .json({ success: false, message: `Server error: ${error}` });
  }
});

// POST
app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Error in Create product: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted." });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});

// Mongo Cluster login
// Username: rjmartin73
// password: gXCcxuXV5BuPFpsT;
// connection string
// mongodb+srv://rjmartin73:gXCcxuXV5BuPFpsT@cluster0.ghfiszz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import Product from "../models/product.model.js";
import express from "express";

const app = express();

export function products() {
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
}

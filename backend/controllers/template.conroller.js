import mongoose from "mongoose";
import Template from "../models/user.model.js";

export const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find({});
    return res.status(200).json({ success: true, data: templates });
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    console
      .status(500)
      .json({ success: false, message: `Server error: ${error}` });
  }
};

// export const createProduct = async (req, res) => {
//   const product = req.body;

//   if (!product.name || !product.price || !product.image) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please provide all fields" });
//   }

//   const newProduct = new Product(product);

//   try {
//     await newProduct.save();
//     res.status(201).json({ success: true, data: newProduct });
//   } catch (error) {
//     console.error(`Error in Create product: ${error.message}`);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// export const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const product = req.body;
//   console.log(id);

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "No product found with that id" });
//   }

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(id, product, {
//       new: true,
//     });

//     res.status(200).json({ success: true, data: updatedProduct });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// export const deleteProduct = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);

//   try {
//     await Product.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "Product deleted." });
//   } catch (error) {
//     res.status(404).json({ success: false, message: "Product not found" });
//   }
// };

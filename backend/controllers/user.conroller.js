import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    console
      .status(500)
      .json({ success: false, message: `Server error: ${error}` });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error(`Error in create user: ${error.message}`);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

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

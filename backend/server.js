import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

// Allows using .env configuration
dotenv.config();

const app = express();

app.use(express.json()); // middleware allows us to accept json in the req.body

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});

// Mongo Cluster login
// Username: rjmartin73
// password: gXCcxuXV5BuPFpsT;
// connection string
// mongodb+srv://rjmartin73:gXCcxuXV5BuPFpsT@cluster0.ghfiszz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

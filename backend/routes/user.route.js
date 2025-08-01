import express from "express";

import { createUser, getUsers } from "../controllers/user.conroller.js";

const router = express();

// GET
router.get("/", getUsers);

// POST
router.post("/", createUser);

//UPDATE
// router.put("/:id", updateProduct);

// DELETE
// router.delete("/:id", deleteProduct);

export default router;

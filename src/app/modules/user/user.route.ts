import express from "express";
import app from "../../../app";
import {
  getUsers,
  createUser,
  getUserById,
  getAdminUsers,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;

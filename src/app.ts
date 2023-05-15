import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes);

export default app;

/*
  Interface --> interface.ts
  Schema, model --> model.ts

  route
  route function --> cotroller.ts
  Database Query Function --> service
*/

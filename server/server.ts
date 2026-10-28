import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { verifyConnection } from "./config/db";
import router from "./routes/router";

// Load .env before anything below reads process.env
dotenv.config();

export const app = express();
const port = Number(process.env.PORT) || 3000;
const environment = process.env.NODE_ENV || "development";

// Global middleware, registered before routes so every request passes through them
app.use(helmet()); // secure HTTP headers on every response
app.use(cors()); // allow cross-origin requests from the frontend
app.use(morgan("dev")); // log each request to the console
app.use(express.json()); // parse incoming JSON request bodies

// Routes — everything on `router` is reachable under /api/*

app.use("/api", router);

verifyConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(
        environment == "development"
          ? `http://localhost:${port}/api`
          : "your domain",
      );
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // stop here — app.listen() is never reached
  });

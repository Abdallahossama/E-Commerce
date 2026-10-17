import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
export const router = express.Router();

app.use('/api',router)

app.listen(port, () => {
  console.log(`http://:localhost/api/${port}`);
});

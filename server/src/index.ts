import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as employees from "./routes/employees";
import * as tags from "./routes/tags";
import mongoose, { Schema } from "mongoose";
import * as bodyParser from "body-parser";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());

employees.register(app, process.env.HOST_URL);
tags.register(app, process.env.HOST_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB Connected");
});

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

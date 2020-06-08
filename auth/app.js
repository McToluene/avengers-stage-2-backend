import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
import config from "./config";

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(config.databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connection to db established"));

app.use("/api", routes);

module.exports = app;

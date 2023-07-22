import express from "express";
import cors from "cors";
import dbConnect from "./Database/dbConnect.mjs";

const app = express();

// parse body
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/registerStudent", async (req, res) => {
  let database = await dbConnect();
  let result = await database.insertOne(req.body);
  if (result.acknowledged) {
    res.send("Data insert successfully");
  }
});

// all unknown route handled
app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

// cors error
app.use(cors("*"));

export default app;

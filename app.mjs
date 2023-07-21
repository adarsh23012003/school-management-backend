import express from "express";
import cors from "cors";

const app = express();
app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

app.use("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.send("Hello world");
});

// parse body
app.use(express.json());

// cors error
app.use(cors("*"));

export default app;

import express from "express";
import cors from "cors";
import studentRouter from "./Student/router.mjs";

const app = express();

// cors error
app.use(cors("*"));

// parse body
app.use(express.json());

// for image showing
app.use("/uploads", express.static("uploads"));

// all unknown route handled

// ***************** All route *******************
app.use("/student", studentRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

export default app;

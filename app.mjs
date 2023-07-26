import express from "express";
import cors from "cors";
import studentRouter from "./Student/router.mjs";
import fileUpload from "express-fileupload";

const app = express();

// cors error
app.use(cors("*"));

// parse body
app.use(express.json());

// for image showing
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// all unknown route handled

// ***************** All route *******************
app.use("/student", studentRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

export default app;

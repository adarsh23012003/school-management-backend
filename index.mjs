import app from "./app.mjs";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => console.log("Connected successfully to server"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () => {
  console.log(`server started on http://localhost:${process.env.PORT}/`);
});

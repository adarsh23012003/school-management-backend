import app from "./app.mjs";
import mongoose from "mongoose";

const url =
  "mongodb+srv://School-management:340384792347@cluster0.4jxf50a.mongodb.net/student";
const port = 5000;
mongoose
  .connect(url, {})
  .then(() => console.log("Connected successfully to server"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});

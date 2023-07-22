import app from "./app.mjs";
import dbConnect from "./Student/Database/dbConnect.mjs";

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
main();
app.listen(5000, () => {
  console.log("server started is successfully");
});

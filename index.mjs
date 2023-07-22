import app from "./app.mjs";
import dbConnect from "./Database/dbConnect.mjs";

// ********************* Data getting *********************************

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
};
// main();
// ********************* Data inserting *********************************
const insert = async () => {
  const database = await dbConnect();
  const result = await database.insertOne({
    name: "banana",
    age: "26",
  });
  console.log(result);
};
// insert();

app.listen(5000, () => {
  console.log("server started is successfully");
});

import app from "./app.mjs";
import { MongoClient } from "mongodb";

// Connection URL
const url =
  "mongodb+srv://School-management:340384792347@cluster0.4jxf50a.mongodb.net/";
const client = new MongoClient(url);
// Database Name
const dbName = "school-management";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("student");

  // the following code examples can be pasted here...
  const respond = await collection.find({}).toArray();
  console.log(respond);
}

main();

app.listen(5000, () => {
  console.log("server started");
});

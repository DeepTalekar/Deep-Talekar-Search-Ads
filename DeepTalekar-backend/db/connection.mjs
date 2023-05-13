import { MongoClient } from "mongodb";

const connectionString = process?.env?.DATABASE_URL || "";

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

let conn
try {
  conn = await client.connect();
} catch (error) {
  console.error("Error while Connecting to Database: ", error);
}

export async function closeDBConnection() {
  await client.close();
}

let db = conn.db("AdsData");

export default db;
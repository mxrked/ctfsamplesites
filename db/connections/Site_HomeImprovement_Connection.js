/**
 *
 *  This is the Main Site mongoDB connection
 *
 */

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://ctfsamplesites_ADMIN_101:%23IloveHTML101@ip-collection.krvejn0.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "ip-storage";
const COLLECTION_NAME = "ips";
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let connection;

export async function connectDatabase() {
  try {
    if (!client || !client.connect()) {
      client = new MongoClient(URI, OPTIONS);

      if (!(await client.connect())) {
        console.log("Connecting to MongoDB failed");
        return null;
      }

      connection = client.db(DB_NAME);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

  return connection;
}

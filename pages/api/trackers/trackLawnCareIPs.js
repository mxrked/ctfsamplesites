/**
 *
 *  This is used to track the Lawn Care site ips
 *
 */

import { connectDatabase } from "@/db/connections/Site_LawnCare_Connection";

export default async function handler(req, res) {
  try {
    const DB = await connectDatabase();

    if (!DB) {
      res.status(500).json({ error: "Failed to connect to MongoDB" });
      return;
    }

    const CLIENT_IP = req.headers["x-real-ip"] || req.connection.remoteAddress;

    // Checking if the IP is not localhost (127.0.0.1) and not ::1 (localhost as well)
    const ON_LOCALHOST = CLIENT_IP !== "127.0.0.1" && CLIENT_IP !== "::1";

    if (ON_LOCALHOST) {
      // Insert the IP only if it doesn't exist
      await DB.collection("ips").updateOne(
        { ip: CLIENT_IP },
        {
          $setOnInsert: { ip: CLIENT_IP, createdAt: new Date() },
        },
        { upsert: true }
      );
    }

    // Identify and store duplicate IPs
    const duplicateIPs = await DB.collection("ips")
      .aggregate([
        {
          $group: {
            _id: "$ip",
            count: { $sum: 1 },
            docs: { $push: "$_id" },
          },
        },
        {
          $match: {
            count: { $gt: 1 },
          },
        },
      ])
      .toArray();

    // Remove all but the first occurrence of each duplicate
    duplicateIPs.forEach(async (duplicate) => {
      const [firstDoc, ...restDocs] = duplicate.docs;
      await DB.collection("ips").deleteMany({ _id: { $in: restDocs } });
    });

    // Removing the entries that have EXCLUDED_IPS values
    const EXCLUDED_IPS = ["127.0.0.1", "::1"];
    await DB.collection("ips").deleteMany({ ip: { $in: EXCLUDED_IPS } });

    const ALL_UNIQUE_IPS = await DB.collection("ips").find().toArray();

    res.json(ALL_UNIQUE_IPS);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

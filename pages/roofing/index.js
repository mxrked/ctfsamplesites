/**
 *
 *  This is the Roofing Index
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { connectDatabase } from "@/db/connections/Site_Roofing_Connection";

import "../../assets/styles/modules/Sites/Roofing/Roofing.module.css";

export async function getServerSideProps() {
  // Establish a connection to the MongoDB database
  const DB = await connectDatabase();

  // If the database connection fails, return a default count of 0
  if (!DB) {
    return {
      props: { count: 0 },
    };
  }

  try {
    // Retrieve the total number of documents (total number of IPs) in the "ips" collection
    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    // Return the total number of IPs as props
    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
      },
    };
  } catch (error) {
    // Handle errors during the counting process, log the error, and return a default count of 0
    console.error("Error while counting documents:", error);
    return {
      props: { TOTAL_NUMBER_OF_IPS: 0 },
    };
  }
}

export default function RoofingIndex({ TOTAL_NUMBER_OF_IPS }) {
  const router = useRouter();

  // Checking if connected to MongoDB
  console.log(TOTAL_NUMBER_OF_IPS);

  // Triggering trackMainIPs.js
  useEffect(() => {
    // Fetching API route
    const FETCH_DATA = async () => {
      try {
        const response = await fetch("/api/trackers/trackRoofingIPs");
        const data = await response.json();

        // Handle the data
        console.log("API response:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    FETCH_DATA();
  }, []);

  return "Roofing Index";
}

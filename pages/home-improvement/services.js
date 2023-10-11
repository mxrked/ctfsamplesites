/**
 *
 *  This is the Home Improvement Services
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { connectToDatabase } from "@/db/connections/Site_HomeImprovement_Connection";

import "../../assets/styles/modules/Sites/HomeImprovement/HomeImprovement.module.css";

export async function getServerSideProps() {
  // Checking to see if connected to db
  try {
    await connectToDatabase();
    return { props: { connectedToDB: true } };
  } catch (error) {
    console.log("Error connecting to db");
    console.error(error);
    return { props: { connectedToDB: false } };
  }
}
export default function HomeImprovementServices({ TOTAL_NUMBER_OF_IPS }) {
  const router = useRouter();

  // Checking if connected to MongoDB
  console.log(TOTAL_NUMBER_OF_IPS);

  // Triggering trackMainIPs.js
  useEffect(() => {
    // Fetching API route
    const FETCH_DATA = async () => {
      try {
        const response = await fetch("/api/trackers/trackHomeImprovementIPs");
        const data = await response.json();

        // Handle the data
        console.log("API response:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    FETCH_DATA();
  }, []);

  return "Home Improvement Services";
}

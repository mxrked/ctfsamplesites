/**
 *
 *  This is the Roofing Contact
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { PageFade } from "@/assets/animations/components/PageFade";

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

    const pageHeadDataFilePath = path.join(
      process.cwd(),
      "public/data/PageHeadData/Roofing/",
      "SiteRoofing_PageHeadData_CONTACT.json"
    );

    const pageHeadDataFileContents = fs.readFileSync(
      pageHeadDataFilePath,
      "utf-8"
    );

    const page_head_data = JSON.parse(pageHeadDataFileContents);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        page_head_data,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        page_head_data: null,
      },
    };
  }
}

export default function RoofingContact({
  TOTAL_NUMBER_OF_IPS,
  page_head_data,
}) {
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

  return (
    <PageFade>
      <div id="PAGE" className="page">
        {/** */} <PageHead page_head_data={page_head_data} />
      </div>
    </PageFade>
  );
}

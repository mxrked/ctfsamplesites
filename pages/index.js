// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/Site_Main_Connection";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  try {
    const DB = await connectDatabase();

    if (!DB) {
      return {
        props: { TOTAL_NUMBER_OF_IPS: 0, page_head_data: null },
      };
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    const pageHeadDataFilePath = path.join(
      process.cwd(),
      "public/data/PageHeadData/Main/",
      "SiteMain_PageHeadData_INDEX.json"
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

export default function Home({ TOTAL_NUMBER_OF_IPS, page_head_data }) {
  const router = useRouter();

  // Checking if connected to MongoDB
  console.log(TOTAL_NUMBER_OF_IPS);

  // Triggering trackMainIPs.js
  useEffect(() => {
    // Fetching API route
    const FETCH_DATA = async () => {
      try {
        const response = await fetch("/api/trackers/trackMainIPs");
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
    <div id="PAGE" className="page">
      {/** */} <PageHead page_head_data={page_head_data} />
    </div>
  );
}

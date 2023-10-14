// React/Next Imports
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/Site_Main_Connection";

import { PageFade } from "@/assets/animations/components/PageFade";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/sites/Main/Nav/DesktopNav";
import { MobileNav } from "@/assets/components/sites/Main/Nav/MobileNav";
import { MobileNavLinks } from "@/assets/components/sites/Main/Nav/MobileNavLinks";
import { IndexTop } from "@/assets/components/sites/Main/Index/IndexTop";

// Style Imports
import "../assets/styles/modules/Sites/Main/Main.module.css";

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
    const sampleSitesDataFilePath = path.join(
      process.cwd(),
      "public/data/SampleSites/",
      "SampleSitesData.json"
    );

    const pageHeadDataFileContents = fs.readFileSync(
      pageHeadDataFilePath,
      "utf-8"
    );
    const sampleSitesDataFileContents = fs.readFileSync(
      sampleSitesDataFilePath,
      "utf-8"
    );

    const page_head_data = JSON.parse(pageHeadDataFileContents);
    const sample_sites_data = JSON.parse(sampleSitesDataFileContents);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        page_head_data,
        sample_sites_data,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        page_head_data: null,
        sample_sites_data: null,
      },
    };
  }
}

export default function Home({
  TOTAL_NUMBER_OF_IPS,
  page_head_data,
  sample_sites_data,
}) {
  const router = useRouter();

  const mobileNavHolderRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileNavHolderRef.current &&
        !mobileNavHolderRef.current.contains(e.target)
      ) {
        document.getElementById("mobileNavLinks").style.display = "none";
        document.getElementById("mobileNavLinksToggler").style.display =
          "block";
        document.getElementById("mobileNavLinksCloser").style.display = "none";
        document.getElementById("mobileNavLinksSampleSitesCB").checked = false;
        document.getElementById("mobileNavSampleSitesLinks").style.height = 0;
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileNavHolderRef]);

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
    <PageFade>
      <div id="PAGE" className="page">
        {/** */} <PageHead page_head_data={page_head_data} />
        <DesktopNav sample_sites_data={sample_sites_data} />
        <div
          id="mobileNavHolder"
          className="mobile-nav-holder"
          ref={mobileNavHolderRef}
        >
          <MobileNav />
          <MobileNavLinks sample_sites_data={sample_sites_data} />
        </div>
        <div id="PAGE_CNT" className="page-cnt">
          <IndexTop />
        </div>
      </div>
    </PageFade>
  );
}

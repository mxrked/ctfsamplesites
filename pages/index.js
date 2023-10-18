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
import { BackToTop } from "@/assets/components/sites/Main/Index/BackToTop";

import { IndexTop } from "@/assets/components/sites/Main/Index/IndexTop";
import { IndexSampleSites } from "@/assets/components/sites/Main/Index/IndexSampleSites";
import { IndexSampleSiteModal } from "@/assets/components/sites/Main/Index/IndexSampleSiteModal";

// Style Imports
import "../assets/styles/modules/Sites/Main/Main.module.css";
import styles from "../assets/styles/modules/Nav/Main/Nav.module.css";

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
    const sampleSiteModalDataFilePath = path.join(
      process.cwd(),
      "public/data/SampleSites/",
      "SampleSiteModalData.json"
    );

    const pageHeadDataFileContents = fs.readFileSync(
      pageHeadDataFilePath,
      "utf-8"
    );
    const sampleSitesDataFileContents = fs.readFileSync(
      sampleSitesDataFilePath,
      "utf-8"
    );
    const sampleSiteModalDataFileContents = fs.readFileSync(
      sampleSiteModalDataFilePath,
      "utf-8"
    );

    const page_head_data = JSON.parse(pageHeadDataFileContents);
    const sample_sites_data = JSON.parse(sampleSitesDataFileContents);
    const sample_site_modal_data = JSON.parse(sampleSiteModalDataFileContents);

    return {
      props: {
        TOTAL_NUMBER_OF_IPS,
        page_head_data,
        sample_sites_data,
        sample_site_modal_data,
      },
    };
  } catch (error) {
    console.error("Error while fetching data:", error);
    return {
      props: {
        TOTAL_NUMBER_OF_IPS: 0,
        page_head_data: null,
        sample_sites_data: null,
        sample_site_modal_data: null,
      },
    };
  }
}

export default function Home({
  TOTAL_NUMBER_OF_IPS,
  page_head_data,
  sample_sites_data,
  sample_site_modal_data,
}) {
  const router = useRouter();

  const mobileNavHolderRef = useRef(null);
  const [IS_MOBILE_NAV_HOLDER_VISIBLE, SET_IS_MOBILE_NAV_HOLDER_VISIBLE] =
    useState(true);

  // Detecting when the user clicks outside of the mobileNavHolder and closes it
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
        document.getElementById("mobileNavLinksOverlay").style.display = "none";
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileNavHolderRef]);

  // This is used to close the mobile nav links when the user scrolls passed the mobileNavHolder
  const handleMobileNavHolderNotVisible = (isElementVisible) => {
    if (!isElementVisible && IS_MOBILE_NAV_HOLDER_VISIBLE) {
      document.getElementById("mobileNavLinksSampleSitesCB").checked = false;

      document.getElementById("mobileNavSampleSitesLinks").style.height = "0";

      document.getElementById("mobileNavLinksCloser").style.display = "none";
      document.getElementById("mobileNavLinksToggler").style.display = "block";

      document.getElementById("mobileNavLinks").style.display = "none";

      document.getElementById("mobileNavLinksOverlay").style.display = "none";
    }
  };

  // Detecting when the user scrolls passed the mobileNavHolder and will close it if it is open
  useEffect(() => {
    const checkMobileNavHolderVisibility = () => {
      if (mobileNavHolderRef.current) {
        const mobileNavHolderRect =
          mobileNavHolderRef.current.getBoundingClientRect();
        const isElementVisible =
          mobileNavHolderRect.top < window.innerHeight &&
          mobileNavHolderRect.bottom >= 0;

        handleMobileNavHolderNotVisible(isElementVisible);

        SET_IS_MOBILE_NAV_HOLDER_VISIBLE(isElementVisible);
      }
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", checkMobileNavHolderVisibility);

    // Checking when page loads
    checkMobileNavHolderVisibility();

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkMobileNavHolderVisibility);
    };
  }, []);

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
        <BackToTop />
        <IndexSampleSiteModal sample_site_modal_data={sample_site_modal_data} />
        <div id="PAGE_CNT" className="page-cnt">
          <div
            id="mobileNavLinksOverlay"
            className={`${styles.mobile_nav_links_overlay}`}
          />
          <IndexTop />
          <IndexSampleSites sample_sites_data={sample_sites_data} />
        </div>
      </div>
    </PageFade>
  );
}

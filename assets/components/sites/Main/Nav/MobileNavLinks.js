/**
 *
 *  This is the Mobile Nav Links
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Main/Nav.module.css";

export const MobileNavLinks = (props) => {
  const router = useRouter();

  return (
    <ul className={`${styles.mobile_nav_links}`} id="mobileNavLinks">
      <li
        className={`${styles.main_link} half-second`}
        id="mobileNavMainLinkOne"
      >
        <span
          className={`${styles.link_main} orientation-change-element half-second`}
          id="mobileNavLinksLinkMain"
        >
          Samples <FaCaretDown className={`${styles.icon} icon half-second`} />
        </span>
        <input
          id="mobileNavLinksSampleSitesCB"
          type={"checkbox"}
          onMouseEnter={(e) => {
            document.getElementById(
              "mobileNavMainLinkOne"
            ).style.backgroundColor = "#202020";
          }}
          onMouseLeave={(e) => {
            document.getElementById(
              "mobileNavMainLinkOne"
            ).style.backgroundColor = "#464646";
          }}
          onChange={(e) => {
            if (e.currentTarget.checked) {
              document.getElementById(
                "mobileNavSampleSitesLinks"
              ).style.height = "100%";
            } else {
              document.getElementById(
                "mobileNavSampleSitesLinks"
              ).style.height = "0";
            }
          }}
        />
      </li>

      <ul
        className={`${styles.sample_sites_nav_links}`}
        id="mobileNavSampleSitesLinks"
      >
        {props.sample_sites_data.map((site) => (
          <li
            key={site.sampleSiteID}
            className="orientation-change-element half-second"
            onClick={() => {
              router.push(site.sampleSiteDemoLink);
            }}
          >
            <span>{site.sampleSiteName}</span>
          </li>
        ))}
      </ul>

      <li className={`${styles.main_link} half-second`}>
        <a
          href="https://www.codingthefront.com"
          target={"_blank"}
          className="orientation-change-element half-second"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#202020";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#464646";
          }}
        >
          <span>Portfolio Website</span>
        </a>
      </li>
    </ul>
  );
};

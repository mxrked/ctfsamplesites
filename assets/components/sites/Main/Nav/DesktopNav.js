/**
 *
 *  This is the Desktop Nav
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Main/Nav.module.css";

export const DesktopNav = (props) => {
  const router = useRouter();

  const [IS_CHECKBOX_CHECKED, SET_IS_CHECKBOX_CHECKED] = useState(false);
  const [IS_CHECKBOX_HOVERED, SET_IS_CHECKBOX_HOVERED] = useState(false);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <div className={`${styles.logo}`}>
                  <span
                    className={`${styles.top_text} orientation-change-element half-second`}
                  >
                    codingthefront
                  </span>
                  <span
                    className={`${styles.bottom_text} orientation-change-element half-second`}
                  >
                    SAMPLE SITES
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.nav_links}`}>
                  <li>
                    <span
                      className={`${styles.link_main} orientation-change-element half-second`}
                      id="desktopNavLinksLinkMain"
                    >
                      Samples{" "}
                      <FaCaretDown
                        className={`${styles.icon} icon half-second`}
                      />
                    </span>
                    <input
                      type={"checkbox"}
                      // Handle mouse enter event
                      onMouseEnter={(e) => {
                        // Set the checkbox hover state to true
                        SET_IS_CHECKBOX_HOVERED(true);
                        // Change the color of the icon to turquoise
                        document
                          .getElementById("desktopNavLinksLinkMain")
                          .querySelector(".icon").style.color = "#3fd7d7";
                      }}
                      // Handle mouse leave event
                      onMouseLeave={(e) => {
                        // Set the checkbox hover state to false
                        SET_IS_CHECKBOX_HOVERED(false);
                        // If the checkbox is not checked, change the color of the icon to dark gray
                        if (!e.currentTarget.checked) {
                          document
                            .getElementById("desktopNavLinksLinkMain")
                            .querySelector(".icon").style.color = "#202020";
                        }
                      }}
                      // Handle blur event
                      onBlur={(e) => {
                        // Uncheck the checkbox
                        e.currentTarget.checked = false;
                        // Set the checkbox checked state
                        SET_IS_CHECKBOX_CHECKED(e.currentTarget.checked);

                        // Get the sample sites links element
                        const SAMPLE_SITE_LINKS = document.getElementById(
                          "desktopNavSampleSitesLinks"
                        );

                        // Use a timeout to allow for smoother transitions
                        setTimeout(() => {
                          // If not hovered and not checked, change the color of the icon to dark gray
                          if (!IS_CHECKBOX_HOVERED && !IS_CHECKBOX_CHECKED) {
                            document
                              .getElementById("desktopNavLinksLinkMain")
                              .querySelector(".icon").style.color = "#202020";
                            // Hide the sample sites links
                            SAMPLE_SITE_LINKS.style.display = "none";
                          }
                          // If hovered, change the color of the icon to turquoise
                          else if (IS_CHECKBOX_HOVERED) {
                            document
                              .getElementById("desktopNavLinksLinkMain")
                              .querySelector(".icon").style.color = "#3fd7d7";
                          }
                        }, 200);
                      }}
                      // Handle checkbox change event
                      onChange={(e) => {
                        // Get the sample sites links element
                        const SAMPLE_SITE_LINKS = document.getElementById(
                          "desktopNavSampleSitesLinks"
                        );

                        // If the checkbox is checked
                        if (e.currentTarget.checked) {
                          // Show the sample sites links
                          SAMPLE_SITE_LINKS.style.display = "block";
                          // Change the color of the icon to turquoise
                          document
                            .getElementById("desktopNavLinksLinkMain")
                            .querySelector(".icon").style.color = "#3fd7d7";
                        }
                        // If the checkbox is unchecked
                        else {
                          // Hide the sample sites links
                          SAMPLE_SITE_LINKS.style.display = "none";
                          // Change the color of the icon to dark gray
                          document
                            .getElementById("desktopNavLinksLinkMain")
                            .querySelector(".icon").style.color = "#202020";

                          // If hovered, change the color of the icon to turquoise
                          if (IS_CHECKBOX_HOVERED) {
                            document
                              .getElementById("desktopNavLinksLinkMain")
                              .querySelector(".icon").style.color = "#3fd7d7";
                          }
                        }
                      }}
                    />
                    <ul
                      className={`${styles.sample_sites_nav_links}`}
                      id="desktopNavSampleSitesLinks"
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
                  </li>

                  <li>
                    <a
                      href="https://www.codingthefront.com"
                      target={"_blank"}
                      className="orientation-change-element half-second"
                    >
                      Portfolio Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

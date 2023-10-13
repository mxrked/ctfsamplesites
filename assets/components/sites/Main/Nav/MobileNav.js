/**
 *
 *  This is the Mobile Nav
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../../../styles/modules/Nav/Main/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  const [IS_CHECKBOX_CHECKED, SET_IS_CHECKBOX_CHECKED] = useState(false);
  const [IS_CHECKBOX_HOVERED, SET_IS_CHECKBOX_HOVERED] = useState(false);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
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
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  className={`${styles.toggler}`}
                  id="mobileNavLinksToggler"
                  onClick={(e) => {
                    e.currentTarget.style.display = "none";
                    document.getElementById(
                      "mobileNavLinksCloser"
                    ).style.display = "flex";

                    document.getElementById("mobileNavLinks").style.display =
                      "block";
                  }}
                >
                  <span className="orientation-change-element half-second" />
                  <span className="orientation-change-element half-second" />
                  <span className="orientation-change-element half-second" />
                </button>

                <button
                  className={`${styles.closer}`}
                  id="mobileNavLinksCloser"
                  onClick={(e) => {
                    document.getElementById(
                      "mobileNavLinksSampleSitesCB"
                    ).checked = false;

                    document.getElementById(
                      "mobileNavSampleSitesLinks"
                    ).style.height = "0";

                    e.currentTarget.style.display = "none";
                    document.getElementById(
                      "mobileNavLinksToggler"
                    ).style.display = "block";

                    document.getElementById("mobileNavLinks").style.display =
                      "none";
                  }}
                >
                  <span className="orientation-change-element half-second" />
                  <span className="orientation-change-element half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

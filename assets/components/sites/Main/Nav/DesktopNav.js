/**
 *
 *  This is the Desktop Nav
 *
 */

import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Main/Nav.module.css";

export const DesktopNav = (props) => {
  const router = useRouter();

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
                    Sample Websites <FaCaretDown className={`${styles.icon}`} />
                    <input
                      type={"checkbox"}
                      onBlur={(e) => {
                        const SAMPLE_SITE_LINKS = document.getElementById(
                          "desktopNavSampleSitesLinks"
                        );

                        if (e.currentTarget.checked) {
                          e.currentTarget.checked = false;
                          setTimeout(() => {
                            SAMPLE_SITE_LINKS.style.display = "none";
                          }, 200);
                        }
                      }}
                      onChange={(e) => {
                        const SAMPLE_SITE_LINKS = document.getElementById(
                          "desktopNavSampleSitesLinks"
                        );

                        if (e.currentTarget.checked) {
                          SAMPLE_SITE_LINKS.style.display = "block";
                        } else {
                          SAMPLE_SITE_LINKS.style.display = "none";
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

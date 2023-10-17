/**
 *
 *  This is the Index Sample Sites
 *
 */

import { useRouter } from "next/router";

import { LazyLoadBackgroundImage } from "@/assets/components/global/All/LazyLoadBackgroundImage";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const IndexSampleSites = ({ sample_sites_data }) => {
  const router = useRouter();

  const PLACEHOLDER_URL =
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/placeholder-img.webp";
  const NOT_FOUND_URL =
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/not-found-img.webp";

  return (
    <section id="indexSampleSites" className={`${styles.index_sample_sites}`}>
      <div className={`${styles.index_sample_sites_inner}`}>
        <div className={`${styles.index_sample_sites_inner_top}`}>
          <div className={`${styles.index_sample_sites_inner_top_cnt}`}>
            <h2 className="orientation-change-element half-second">
              Limitless creative capabilities<span>.</span>
            </h2>

            <p className="orientation-change-element half-second">
              Explore sample websites spanning painting, pressure washing, home
              improvement, lawn care, roofing, and plumbing, showcasing
              expertise in each domain. These platforms offer valuable insights
              for anyone seeking services in these diverse and essential areas.
            </p>
          </div>
        </div>

        <div
          id="indexSampleSites_JUMPER_POINT"
          className={`${styles.index_sample_sites_inner_main}`}
        >
          {sample_sites_data.map((site) => (
            <div
              key={site.sampleSiteID}
              id={site.sampleSiteID}
              className={`${styles.sample_site}`}
            >
              <div className={`${styles.sample_site_inner}`}>
                <div
                  className={`${styles.sample_site_inner_box} container-fluid`}
                >
                  <div className={`${styles.sample_site_inner_row} row`}>
                    <div
                      className={`${styles.sample_site_inner_side} ${styles.sample_site_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
                    >
                      {site.sampleSiteImg !== "" &&
                      site.sampleSiteImg !== null &&
                      site.sampleSiteImg !== "n/a" &&
                      site.sampleSiteImg !== "N/A" &&
                      site.sampleSiteImg !== NOT_FOUND_URL ? (
                        <LazyLoadBackgroundImage
                          image_url={site.sampleSiteImg}
                          alt={`Image of ${site.sampleSiteName}`}
                          style_className_MAIN={styles.sample_site_bg}
                          style_className_PLACEHOLDER={styles.sample_site_bg}
                        />
                      ) : (
                        <LazyLoadBackgroundImage
                          image_url={NOT_FOUND_URL}
                          alt={`404 image.`}
                          style_className_MAIN={styles.sample_site_bg}
                          style_className_PLACEHOLDER={
                            styles.sample_site_placeholder
                          }
                        />
                      )}
                    </div>
                    <div
                      className={`${styles.sample_site_inner_side} ${styles.sample_site_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
                    >
                      <div className={`${styles.sample_site_inner_side_cnt}`}>
                        <div className={`${styles.sample_site_top}`}>
                          <div className={`${styles.sample_site_id_holder}`}>
                            {site.sampleSiteID !== "" &&
                            site.sampleSiteID !== null &&
                            site.sampleSiteID !== "n/a" &&
                            site.sampleSiteID !== "N/A" ? (
                              <span
                                className={`${styles.sample_site_id} orientation-change-element half-second`}
                              >
                                {site.sampleSiteID}
                              </span>
                            ) : (
                              <div>
                                <span
                                  className={`${styles.sample_site_id} orientation-change-element half-second`}
                                >
                                  ERROR!
                                </span>
                              </div>
                            )}
                          </div>

                          <div className={`${styles.sample_site_name_holder}`}>
                            {site.sampleSiteID !== "" &&
                            site.sampleSiteID !== null &&
                            site.sampleSiteID !== "n/a" &&
                            site.sampleSiteID !== "N/A" ? (
                              <span
                                className={`${styles.sample_site_name} orientation-change-element half-second`}
                              >
                                <span>{site.sampleSiteName}</span>
                              </span>
                            ) : (
                              <div>
                                <span
                                  className={`${styles.sample_site_name} orientation-change-element half-second`}
                                >
                                  ERROR!
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <ul className={`${styles.sample_site_techs}`}>
                          {site.sampleSiteTechnologies.map((tech) => (
                            <li
                              key={tech.techID}
                              className="orientation-change-element half-second"
                            >
                              {tech.techImg !== "" &&
                              tech.techImg !== null &&
                              tech.techImg !== "n/a" &&
                              tech.techImg !== "N/A" &&
                              tech.techImg !== NOT_FOUND_URL ? (
                                <img
                                  className="lazyload"
                                  data-src={tech.techImg}
                                  alt={`Image of ${tech.techName}.`}
                                />
                              ) : (
                                <img
                                  className="lazyload"
                                  data-src={NOT_FOUND_URL}
                                  alt={`404 Image.`}
                                />
                              )}
                            </li>
                          ))}
                        </ul>

                        <div className={`${styles.sample_site_desc_holder}`}>
                          {site.sampleSiteDesc !== "" &&
                          site.sampleSiteDesc !== null &&
                          site.sampleSiteDesc !== "n/a" &&
                          site.sampleSiteDesc !== "N/A" ? (
                            <p className="orientation-change-element half-second">
                              {site.sampleSiteDesc}
                            </p>
                          ) : (
                            <p className="orientation-change-element half-second">
                              ERROR!
                            </p>
                          )}
                        </div>

                        <ul className={`${styles.sample_site_links}`}>
                          {site.sampleSiteDemoLink !== "" &&
                          site.sampleSiteDemoLink !== null &&
                          site.sampleSiteDemoLink !== "n/a" &&
                          site.sampleSiteDemoLink !== "N/A" ? (
                            <li
                              onClick={() => {
                                router.push(site.sampleSiteDemoLink);
                              }}
                              className={`${styles.demo_link} orientation-change-element half-second`}
                            >
                              <span>Visit {site.sampleSiteName} Site</span>
                            </li>
                          ) : (
                            <li
                              onClick={() => {
                                router.push("/404");
                              }}
                              className={`${styles.demo_link} orientation-change-element half-second`}
                            >
                              <span>Visit 404 Page</span>
                            </li>
                          )}

                          {site.sampleSiteModalTriggerID !== "" &&
                          site.sampleSiteModalTriggerID !== null &&
                          site.sampleSiteModalTriggerID !== "n/a" &&
                          site.sampleSiteModalTriggerID !== "N/A" ? (
                            <li
                              onClick={() => {}}
                              className={`${styles.modal_trigger} orientation-change-element half-second`}
                            >
                              <span>Learn More</span>
                            </li>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

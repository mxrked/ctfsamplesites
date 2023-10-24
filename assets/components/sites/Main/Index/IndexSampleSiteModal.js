/**
 *
 *  This is the Index Sample Site Modal
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import { FaHandPointer } from "react-icons/fa";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const IndexSampleSiteModal = ({ sample_site_modal_data, onClose }) => {
  const router = useRouter();

  const [IS_MODAL_OPEN, SET_IS_MODAL_OPEN] = useState(true);

  const NOT_FOUND_URL =
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/not-found-img.webp";
  const PLACEHOLDER_URLS = [
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/red.webp",
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/blue.webp",
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/green.webp",
    "https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/ctfsamplesites_CDN/main/imgs/index/purple.webp",
  ];

  const handleModalClose = () => {
    SET_IS_MODAL_OPEN(false);
    onClose();
  };

  const convertToCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(value);

    return formattedValue;
  };

  return sample_site_modal_data.map(
    (modal) =>
      IS_MODAL_OPEN && (
        <div
          key={modal.modalID}
          id={`${modal.modalID}_MODAL`}
          className={`${styles.sample_site_modal}`}
        >
          <div
            id={`${modal.modalID}_DARKEN`}
            className={`${styles.darken}`}
            onClick={() => {
              RemoveStorageVariable("session", "Modal Opened");

              document.getElementById(
                modal.modalID + "_MODAL"
              ).style.opacity = 0;
              document.getElementById(
                modal.modalID + "_MODAL"
              ).style.visibility = "hidden";
              document.getElementById(
                modal.modalID + "_MODAL"
              ).style.pointerEvents = "none";
              document
                .getElementById(modal.modalID + "_MODAL")
                .querySelector(".modal-main").style.overflowY = "hidden";

              setTimeout(() => {
                document.body.style.overflowY = "auto";
                document.body.style.pointerEvents = "auto";
              }, 100);

              handleModalClose();
            }}
          />

          <div
            id={`${modal.modalID}_details_modal_DARKEN`}
            className={`${styles.darken} ${styles.details_modal_darken} details-darken`}
            onClick={(e) => {
              e.currentTarget.style.display = "none";

              document.querySelectorAll(".details-modal").forEach((modal) => {
                modal.style.display = "none";
              });
            }}
          />

          <div
            id={`${modal.modalID}_details_MODAL`}
            className={`${styles.sample_site_modal_details_modal} details-modal`}
          >
            <div className={`${styles.sample_site_modal_details_modal_cnt}`}>
              <div
                className={`${styles.sample_site_modal_details_modal_cnt_top}`}
              >
                <span
                  className={`${styles.top_heading} orientation-change-element half-second`}
                >
                  Included/Pricing
                </span>

                <button
                  onClick={() => {
                    document
                      .querySelectorAll(".details-darken")
                      .forEach((darken) => {
                        darken.style.display = "none";
                      });

                    document
                      .querySelectorAll(".details-modal")
                      .forEach((modal) => {
                        modal.style.display = "none";
                      });
                  }}
                  className={`${styles.closer} orientation-change-element half-second`}
                >
                  <span>Close</span>
                </button>
              </div>

              <div className={`${styles.website_details}`}>
                {/**
                  <span
                  className={`${styles.heading} orientation-change-element half-second`}
                >
                  Website Details
                </span>
                */}

                <ul>
                  <li className="orientation-change-element half-second">
                    Page Count:{" "}
                    <span>{modal.modalProjectDetails[0].pageCount}</span>
                  </li>

                  {modal.modalProjectDetails[0].pageNames.map(
                    (pageName, index) => (
                      <li
                        key={index}
                        className="orientation-change-element half-second"
                      >
                        {pageName} -{" "}
                        {modal.modalProjectDetails[0].pageDesc[index]}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className={`${styles.pricing_box} container-fluid`}>
                <div className={`${styles.pricing_row} row`}>
                  <div
                    className={`${styles.pricing_regular} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.pricing_heading} orientation-change-element half-second`}
                    >
                      Pricing (Regular):
                    </span>

                    <ul>
                      <li className="orientation-change-element half-second">
                        Pages:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].pagePrice
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Hosting (Monthly):{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].hostingPrice_M
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Hosting (Annually):{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].hostingPrice_A
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Domain:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].domainPrice
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Total (Monthly):{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].total_M
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Total (Annually):{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_REGULAR[0].total_A
                        )}
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`${styles.pricing_renting} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.pricing_heading} orientation-change-element half-second`}
                    >
                      Pricing (Renting):
                    </span>

                    <ul>
                      <li className="orientation-change-element half-second">
                        Pages:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_RENTING[0].pagePrice
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Hosting:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_RENTING[0].hostingPrice
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Domain:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_RENTING[0].domainPrice
                        )}
                      </li>
                      <li className="orientation-change-element half-second">
                        Total:{" "}
                        {convertToCurrency(
                          modal.modalProjectPricing_RENTING[0].total
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.sample_site_modal_main} modal-main`}>
            <div className={`${styles.sample_site_modal_main_inner}`}>
              <div className={`${styles.sample_site_modal_main_inner_top}`}>
                <div
                  className={`${styles.sample_site_modal_main_inner_top_box} container-fluid`}
                >
                  <div
                    className={`${styles.sample_site_modal_main_inner_top_row} row`}
                  >
                    <div
                      className={`${styles.sample_site_modal_main_inner_top_side} ${styles.sample_site_modal_top_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
                    >
                      <div
                        className={`${styles.sample_site_modal_main_inner_top_side_cnt}`}
                      >
                        <div className={`${styles.main_img_holder}`}>
                          <LazyLoadImage
                            id={`${modal.modalID}_MAIN_IMG`}
                            src={
                              !PLACEHOLDER_URLS.includes(
                                modal.modalImages[0].imgSrc
                              ) ||
                              modal.modalImages[0].imgSrc == "" ||
                              modal.modalImages[0].imgSrc == null
                                ? NOT_FOUND_URL
                                : modal.modalImages[0].imgSrc
                            }
                            alt={
                              PLACEHOLDER_URLS.includes(
                                modal.modalImages[0].imgSrc
                              )
                                ? "Placeholder Image."
                                : modal.modalImages[0].imgAlt
                            }
                            title={
                              PLACEHOLDER_URLS.includes(
                                modal.modalImages[0].imgSrc
                              )
                                ? "Placeholder Image."
                                : modal.modalImages[0].imgAlt
                            }
                            className={`${styles.main_img}`}
                          />
                        </div>

                        <div className={`${styles.modal_imgs}`}>
                          <div
                            className={`${styles.modal_imgs_box} container-fluid`}
                          >
                            <div className={`${styles.modal_imgs_row} row`}>
                              {modal.modalImages.map((img) => (
                                <div
                                  id={`${modal.modalID}_MODAL_${img.imgID}_IMG_HOLDER`}
                                  key={img.imgID}
                                  className={`${styles.modal_img} ${
                                    styles[img.imgID]
                                  } ${
                                    modal.modalImages[0].imgSrc ===
                                      img.imgSrc && "disabled-modal-img"
                                  } img-holder col-lg-3 col-md-3 col-sm-6 col-xs-6`}
                                >
                                  <LazyLoadImage
                                    id={`${modal.modalID}_MODAL_${img.imgID}`}
                                    src={
                                      !PLACEHOLDER_URLS.includes(img.imgSrc) ||
                                      modal.modalImages[0].imgSrc == "" ||
                                      modal.modalImages[0].imgSrc == null
                                        ? NOT_FOUND_URL
                                        : img.imgSrc
                                    }
                                    alt={img.imgAlt}
                                    title={img.imgAlt}
                                    className={`${styles.modal_img}`}
                                  />

                                  <button
                                    title={
                                      PLACEHOLDER_URLS.includes(
                                        modal.modalImages[0].imgSrc
                                      )
                                        ? "Placeholder Image."
                                        : modal.modalImages[0].imgAlt
                                    }
                                    onClick={() => {
                                      const MODAL_IMG_HOLDER =
                                        document.getElementById(
                                          `${modal.modalID}_MODAL_${img.imgID}_IMG_HOLDER`
                                        );
                                      const MAIN_IMG = document.getElementById(
                                        `${modal.modalID}_MAIN_IMG`
                                      );

                                      MAIN_IMG.src = img.imgSrc;
                                      if (img.imgAlt !== "") {
                                        MAIN_IMG.alt = img.imgAlt;
                                      } else {
                                        MAIN_IMG.alt = "undefined";
                                      }

                                      document
                                        .querySelectorAll(".img-holder")
                                        .forEach((holder) => {
                                          if (
                                            holder.classList.contains(
                                              "disabled-modal-img"
                                            )
                                          ) {
                                            holder.classList.remove(
                                              "disabled-modal-img"
                                            );
                                          }
                                        });

                                      MODAL_IMG_HOLDER.classList.add(
                                        "disabled-modal-img"
                                      );
                                      // MODAL_IMG_HOLDER.style.opacity = 1;
                                    }}
                                    className="half-second"
                                  >
                                    <FaHandPointer
                                      className={`${styles.icon}`}
                                    />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.sample_site_modal_main_inner_top_side} ${styles.sample_site_modal_top_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
                    >
                      <div
                        className={`${styles.sample_site_modal_main_inner_top_side_cnt}`}
                      >
                        <div className={`${styles.modal_text}`}>
                          {modal.sampleSiteID !== "" &&
                          modal.sampleSiteID !== null ? (
                            <span
                              className={`${styles.sample_site_id} orientation-change-element half-second`}
                            >
                              {modal.sampleSiteID}
                            </span>
                          ) : (
                            <span
                              className={`${styles.sample_site_id} orientation-change-element half-second`}
                            >
                              ERROR: No Sample Site ID!
                            </span>
                          )}
                          {modal.sampleSiteName !== "" &&
                          modal.sampleSiteName !== null ? (
                            <span
                              className={`${styles.sample_site_name} orientation-change-element half-second`}
                            >
                              {modal.sampleSiteName}
                            </span>
                          ) : (
                            <span
                              className={`${styles.sample_site_name} orientation-change-element half-second`}
                            >
                              ERROR: No Sample Site Name!
                            </span>
                          )}
                          {modal.modalDesc !== "" &&
                          modal.modalDesc !== null ? (
                            <p
                              className={`orientation-change-element half-second`}
                            >
                              {modal.modalDesc}
                            </p>
                          ) : (
                            <p
                              className={`orientation-change-element half-second`}
                            >
                              ERROR: No Sample Site Description!
                            </p>
                          )}
                        </div>

                        <div className={`${styles.sample_site_technologies}`}>
                          {modal.sampleSiteTechnologies.map((tech) => (
                            <div className={`${styles.sample_site_tech}`}>
                              <LazyLoadImage
                                key={tech.techID}
                                src={tech.techImg}
                                alt={`Image of ${tech.techName}.`}
                                title={tech.techName}
                                className={`${styles.tech_img} orientation-change-element half-second`}
                              />

                              {tech.techName !== "" &&
                              tech.techName !== null ? (
                                <span
                                  className={`${styles.tech_name} orientation-change-element half-second`}
                                >
                                  {tech.techName}
                                </span>
                              ) : (
                                <span
                                  className={`${styles.tech_name} orientation-change-element half-second`}
                                >
                                  ERROR: No Tech Name!
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className={`${styles.sample_site_links}`}>
                          {modal.sampleSiteDemoLink !== "" &&
                          modal.sampleSiteDemoLink !== null ? (
                            <button
                              onClick={() => {
                                router.push(modal.sampleSiteDemoLink);
                              }}
                              className={`${styles.demo_link} orientation-change-element half-second`}
                            >
                              <span>Visit {modal.sampleSiteName} Site</span>
                            </button>
                          ) : (
                            <button
                              className={`${styles.demo_link} orientation-change-element half-second`}
                            >
                              <span>ERROR: No Sample Site Link!</span>
                            </button>
                          )}

                          <button
                            onClick={() => {
                              const DETAILS_MODAL = document.getElementById(
                                `${modal.modalID}_details_MODAL`
                              );
                              const DETAILS_DARKEN = document.getElementById(
                                `${modal.modalID}_details_modal_DARKEN`
                              );

                              DETAILS_MODAL.style.display = "flex";
                              DETAILS_DARKEN.style.display = "block";
                            }}
                            className={`${styles.details_toggler} orientation-change-element half-second`}
                          >
                            <span>Included/Pricing</span>
                          </button>

                          <button
                            onClick={() => {
                              RemoveStorageVariable("session", "Modal Opened");

                              document.getElementById(
                                modal.modalID + "_MODAL"
                              ).style.opacity = 0;
                              document.getElementById(
                                modal.modalID + "_MODAL"
                              ).style.visibility = "hidden";
                              document.getElementById(
                                modal.modalID + "_MODAL"
                              ).style.pointerEvents = "none";
                              document
                                .getElementById(modal.modalID + "_MODAL")
                                .querySelector(".modal-main").style.overflowY =
                                "hidden";

                              setTimeout(() => {
                                document.body.style.overflowY = "auto";
                                document.body.style.pointerEvents = "auto";
                              }, 100);

                              handleModalClose();
                            }}
                            className={`${styles.closer} orientation-change-element half-second`}
                          >
                            <span>Close</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  );
};

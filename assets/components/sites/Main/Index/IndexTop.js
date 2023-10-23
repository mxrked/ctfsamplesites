/**
 *
 *  This is the Index Top
 *
 */

import { useEffect, useState } from "react";

import { LazyLoadBackgroundImage } from "@/assets/components/global/All/LazyLoadBackgroundImage";

import { TOP_BG } from "@/assets/cdns/Site_Main/CDNBgs";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const IndexTop = () => {
  const [INDEX_TOP_BG_TITLE, SET_INDEX_TOP_BG_TITLE] = useState("");

  useEffect(() => {
    const BG = document.getElementById("indexTopBg");

    if (BG) {
      SET_INDEX_TOP_BG_TITLE(BG.getAttribute("aria-label"));
    }
  }, [INDEX_TOP_BG_TITLE]);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <LazyLoadBackgroundImage
        id="indexTopBg"
        image_url={TOP_BG}
        image_alt={"CTF Sample Sites - React project enviroment."}
        style_className_MAIN={styles.index_top_bg}
        style_className_PLACEHOLDER={styles.index_top_bg_placeholder}
      />

      <div className={`${styles.index_top_overlay}`} title={INDEX_TOP_BG_TITLE}>
        <div className={`${styles.index_top_overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            <span>Every professional</span>
            <span className={`${styles.space_span}`}> </span>
            <span>company needs a website.</span>
          </h1>

          <p className="orientation-change-element half-second">
            Below are some sample websites I have made that may relate to your
            company. If you are interested and impressed, give me a call or text
            at{" "}
            <a href="tel:+13368313432" className="half-second">
              (335) 831-3432
            </a>
            .
          </p>

          <div
            className={`${styles.link} orientation-change-element half-second`}
            onClick={() => {
              if (document.getElementById("indexSampleSites_JUMPER_POINT")) {
                document
                  .getElementById("indexSampleSites_JUMPER_POINT")
                  .scrollIntoView();
              }
            }}
          >
            <span>View Sample Websites</span>
          </div>
        </div>
      </div>
    </section>
  );
};

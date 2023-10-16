/**
 *
 *  This is the Index Sample Sites
 *
 */

import { useRouter } from "next/router";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const IndexSampleSites = ({ sample_sites_data }) => {
  const router = useRouter();

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
              <span>{site.sampleSiteName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 *
 *  This is the Footer
 *
 */

import { useRouter } from "next/router";

import styles from "../../../../styles/modules/Footer/Main/Footer.module.css";

export const Footer = () => {
  const router = useRouter();

  const footerLinks = [
    {
      linkID: "LINK_1",
      linkName: "Painting",
      linkRoute: "/painting",
    },
    {
      linkID: "LINK_2",
      linkName: "Home Improvement",
      linkRoute: "/home-improvement",
    },
    {
      linkID: "LINK_3",
      linkName: "Pressure Washing",
      linkRoute: "/pressure-washing",
    },
    {
      linkID: "LINK_4",
      linkName: "Lawn Care",
      linkRoute: "/lawn-care",
    },
    {
      linkID: "LINK_5",
      linkName: "Plumbing",
      linkRoute: "/plumbing",
    },
    {
      linkID: "LINK_6",
      linkName: "Roofing",
      linkRoute: "/roofing",
    },
  ];

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_top}`}>
        <div className={`${styles.footer_top_inner}`}>
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_top_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
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
                className={`${styles.footer_top_inner_side} ${styles.footer_top_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <ul>
                    {footerLinks.map((link) => (
                      <li key={link.linkID}>
                        <span
                          className="orientation-change-element half-second"
                          onClick={() => {
                            router.push(link.linkRoute);
                          }}
                        >
                          {link.linkName}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <div className={`${styles.footer_bottom_inner}`}>
          <span className="orientation-change-element half-second">
            Created by
            <a href="https://www.codingthefront.com">codingthefront.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

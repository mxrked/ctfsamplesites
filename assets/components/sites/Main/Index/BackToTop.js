/**
 *
 *  This is the Index Back To Top
 *
 */

import { useEffect } from "react";

import { FaCaretUp } from "react-icons/fa";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const BackToTop = () => {
  const BackToTopStatus = () => {
    if (window.scrollY > 700) {
      document.getElementById("backToTopHolder").style.bottom = "20px";
    } else {
      document.getElementById("backToTopHolder").style.bottom = "-100%";
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      BackToTopStatus();
    });
    window.addEventListener("scroll", () => {
      BackToTopStatus();
    });
  }, []);

  return (
    <div
      id="backToTopHolder"
      className={`${styles.back_to_top_holder} full-second`}
    >
      <button
        id="backToTop"
        className={`${styles.back_to_top} orientation-change-element half-second`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaCaretUp className={`${styles.icon}`} />
      </button>
    </div>
  );
};

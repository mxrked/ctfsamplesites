/**
 *
 *  This is the Index Sample Site Modal
 *
 */

import { useState } from "react";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../../styles/modules/Sites/Main/Main.module.css";

export const IndexSampleSiteModal = ({ sample_site_modal_data, onClose }) => {
  const [IS_MODAL_OPEN, SET_IS_MODAL_OPEN] = useState(true);

  const handleModalClose = () => {
    SET_IS_MODAL_OPEN(false);
    onClose();
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

          <div className={`${styles.sample_site_modal_main} modal-main`}>
            {modal.sampleSiteID}
            <br />
            {modal.sampleSiteName}
          </div>
        </div>
      )
  );
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/MyPage.module.css";

const LogoutButton = ({ setUserLogin }) => {
  return (
    <div className={styles.LogoutWrap}>
      <button
        className={styles.LogoutButton}
        onClick={() => {
          setUserLogin(false);
        }}
      >
        <FontAwesomeIcon icon={faPowerOff} style={{ width: "25px" }} />
      </button>
    </div>
  );
};

export default LogoutButton;

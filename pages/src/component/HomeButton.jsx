import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import styles from "@/styles/NavBar.module.css";

const HomeButton = ({ userLogin }) => {
  const router = useRouter();
  return (
    <Link
      className={`${styles.linkStyle} ${
        router.route == "/GiftTree/[id]" ? styles.activeLink : ""
      }`}
      href={`/GiftTree/${userLogin.UserID}`}
    >
      <div className={styles.giftLinkContent}>
        <FontAwesomeIcon
          style={{ width: 25, display: "block" }}
          icon={faGift}
        />
      </div>
    </Link>
  );
};

export default HomeButton;

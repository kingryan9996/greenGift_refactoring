import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import styles from "@/styles/NavBar.module.css";
import axios from "axios";

const MyPageButton = ({ userLogin }) => {
  const router = useRouter();
  const [userBadge, setUserBadge] = useState(null);

  useEffect(() => {
    axios
      .get("/api/gift", { params: { userLogin: userLogin.UserID } })
      .then((res) => {
        setUserBadge(res.data.filter((obj) => obj.state == 1).length);
      });
  }, [userLogin]);

  return (
    <Link
      className={`${styles.linkStyle} ${
        router.route == "/MyPage/[id]" ? styles.activeLink : ""
      }`}
      href={`/MyPage/${userLogin.UserID}`}
    >
      <div className={styles.userLinkContent}>
        <FontAwesomeIcon
          style={{ width: 25, display: "block" }}
          icon={faUser}
        />
        <span className={styles.userLinkContentBadge}>
          {userBadge ? userBadge : ""}
        </span>
      </div>
    </Link>
  );
};

export default MyPageButton;

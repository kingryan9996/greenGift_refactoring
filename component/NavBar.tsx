import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TeamC } from "../context/Context";
import styles from "styles/NavBar.module.css";
import axios from "axios";
import MyPageButton from "./MyPageButton";
import HomeButton from "./HomeButton";

const NavBar = () => {
  const router = useRouter();
  const { userLogin } = useContext(TeamC);

  return (
    <div
      className={`${styles.navbar} ${
        router.pathname === "/" ? styles.displayNone : ""
      }`}
    >
      <HomeButton userLogin={userLogin} />
      <span className={styles.coin}>
        코인 :{" "}
        {Number(userLogin.Coin)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
      <MyPageButton userLogin={userLogin} />
    </div>
  );
};

export default NavBar;

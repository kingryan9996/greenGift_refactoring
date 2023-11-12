import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { TeamC } from "../context/Context";
import styles from "styles/GiftTargetName.module.css";

const GiftTargetName = () => {
  const router = useRouter();
  const { userLogin } = useContext(TeamC);
  const [targetName, setTargetName] = useState();

  useEffect(() => {
    // 현재 위시리스트의 유저이름
    axios.get("/api").then((res) => {
      setTargetName(res.data.filter((g) => g.UserID == router.query.id));
    });
  }, [router.query.id]);

  return (
    <div className={styles.NameWrapper}>
      <h2 className={styles.UserName}>
        {targetName?.length == 0
          ? userLogin.NickName
          : targetName?.[0].NickName}
        님의 위시리스트
      </h2>
    </div>
  );
};

export default GiftTargetName;

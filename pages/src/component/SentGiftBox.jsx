import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "styles/GiftBox.module.css";
import GiftItem from "./GiftItem";

const SentGiftBox = ({ userLogin }) => {
  const [sentGift, setSentGift] = useState();

  useEffect(() => {
    axios
      .get("/api/givepost", { params: { userLogin: userLogin.UserID } })
      .then((res) => {
        setSentGift(res.data);
      });
  }, []);

  return (
    <div className={styles.GiftBox}>
      <ul className={styles.UlWrap}>
        {sentGift?.length > 0 &&
          sentGift.map((obj, idx) => {
            return <GiftItem key={idx} gift={sentGift} obj={obj} idx={idx} />;
          })}
      </ul>
    </div>
  );
};

export default SentGiftBox;

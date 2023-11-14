import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "styles/GiftBox.module.css";
import GiftItem from "./GiftItem";

const GiftBox = ({ userLogin }) => {
  const [gift, setGift] = useState();

  useEffect(() => {
    // axios
    //   .get("/api/gift", { params: { userLogin: userLogin.UserID } })
    //   .then((res) => {
    //     setGift(res.data.filter((obj) => obj.state == 1));
    //   });
  }, []);

  return (
    <div className={styles.GiftBox}>
      <ul className={styles.UlWrap}>
        {/* {gift?.length > 0 &&
          gift.map((obj, idx) => {
            return <GiftItem key={idx} gift={gift} obj={obj} idx={idx} />;
          })} */}
      </ul>
    </div>
  );
};

export default GiftBox;

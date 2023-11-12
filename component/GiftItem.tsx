import React from "react";
import styles from "styles/GiftBox.module.css";
import { useRouter } from "next/router";

const GiftItem = ({ gift, obj, idx }) => {
  const router = useRouter();

  return (
    <li
      className={styles.List}
      key={idx}
      style={{
        borderBottom:
          idx == gift.length - 1 ? "none" : "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className={styles.ListItem}>
        <img className={styles.ItemImg} src={obj.image} alt="gift" />
        <div className={styles.TitleWrap}>
          <p className={styles.Title}>
            {obj.title
              .replaceAll("<b>", "")
              .replaceAll("</b>", "")
              .substr(0, 25)}
          </p>
          <p className={styles.Price}>
            {Number(obj.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className={styles.targetName}>
            {obj.GiverID == router.query.id
              ? obj.UserName + "에게 보냄"
              : obj.GiverName + "에게 받음"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default GiftItem;

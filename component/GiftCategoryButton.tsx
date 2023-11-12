import React from "react";
import styles from "styles/MyPage.module.css";

const GiftCategoryButton = ({ giftVisible, setGiftVisible, color, text }) => {
  return (
    <button
      className={styles.GiftBoxCategory}
      onClick={() => {
        setGiftVisible(!giftVisible);
      }}
      style={{
        backgroundColor: color,
      }}
    >
      {text} 선물
    </button>
  );
};

export default GiftCategoryButton;

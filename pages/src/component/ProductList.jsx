import React, { useRef } from "react";
import styles from "@/styles/ProductList.module.css";
import ShoppingCart from "./ShoppingCart";
import WishList from "./WishList";

const ProductList = ({ visible, setVisible }) => {
  const coinImg = useRef();
  const coinTag = useRef(null);

  const numRef = useRef(10);

  return (
    <div className={styles.CoinWrap}>
      <div className={styles.Coin} ref={coinImg}>
        <img className={styles.CoinImg} src="/img/coin-crop.gif" />
        <strong className={styles.CoinPrice}>
          <span className={styles.PriceAl}>-</span>
          {coinTag.current}
        </strong>
      </div>

      <div className={styles.Wrap2}>
        <WishList />
      </div>

      {visible ? <ShoppingCart /> : ""}

      <button
        className={styles.closeButton}
        onClick={() => {
          setVisible(!visible);
          numRef.current = 10;
        }}
      >
        {!visible ? "WishList" : "닫기"}
      </button>
    </div>
  );
};

export default ProductList;

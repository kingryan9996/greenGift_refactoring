import React, { useContext } from "react";
import styles from "styles/SearchItem.module.css";
import axios from "axios";
import { TeamC } from "../context/Context";

const SearchItem = ({ obj, idx }) => {
  const { userLogin } = useContext(TeamC);

  const addToGift = (obj) => {
    axios.post("/api/gift", {
      UserID: userLogin.UserID,
      UserName: userLogin.NickName,
      title: obj.title,
      image: obj.image,
      price: obj.lprice,
      state: 0,
    });
  };

  return (
    <figure className={styles.figure} key={"shopping" + idx}>
      <img className={styles.naverSearchImg} src={obj.image} alt="product" />
      <figcaption className={styles.ImgDescription}>
        <strong className={styles.Price}>
          {obj.title
            .replaceAll("<b>", "")
            .replaceAll("</b>", "")
            .substr(0, 10) + (obj.title.length > 10 ? "..." : "")}
        </strong>
        <p className={styles.p}>
          {" "}
          {Number(obj.lprice)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </p>
        <div className={styles.div}>
          <button
            className={styles.button}
            onClick={() => {
              window.open(
                `${obj.link}`,
                "window_name",
                "width=430, height=500, location=no, status=no,  scrollbars=yes"
              );
            }}
          >
            보러가기
          </button>
          <button
            className={styles.button}
            onClick={() => {
              addToGift(obj);
            }}
          >
            담아두기
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default SearchItem;

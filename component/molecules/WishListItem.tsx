import React from "react";
import styles from "styles/molecules/WishListItem.module.scss";
import axios from "axios";
import Button from "component/atoms/Button";

const WishListItem = ({
  userLogin,
  setUserLogin,
  obj,
  idx,
  setGive,
  userWishListGet,
}) => {
  const isMyWishPage = obj.UserID === userLogin.UserID;
  const GiftDelete = () => {
    // axios.delete("/api/gift", {
    //   params: { ItemID: obj.id },
    // });
    // userWishListGet();
  };
  const GiftSend = () => {
    // if (userLogin.Coin < obj.price) return alert("보유 코인이 부족합니다.");
    // if (coinImg.current.style.display == "none") {
    //   // console.log(obj.price)
    //   coinTag.current = obj.price;
    //   coinImg.current.style.display = "block";
    //   setTimeout(() => (coinImg.current.style.display = "none"), 1000);
    // }
    // axios.put("/api/gift", {
    //   ItemID: obj.id,
    //   GiverID: userLogin.UserID,
    //   GiverName: userLogin.NickName,
    // });
    // axios.put("/api", {
    //   Coin: userLogin.Coin - obj.price,
    //   UserID: userLogin.UserID,
    // });
    // axios.get("/api", { LoginID: userLogin.UserID }).then((res) => {
    //   let newValue = res?.data?.filter((obj) => obj.UserID == userLogin.UserID);
    //   setUserLogin(newValue[0]);
    // });
    // userWishListGet();
  };
  return (
    <div className={styles.WishListItem}>
      <figure key={"Tree" + idx}>
        <img
          src={obj.image}
          style={{
            filter: obj.state == 0 ? "grayscale(0%)" : "grayscale(100%)",
          }}
        />
        <figcaption className={styles.ImgDescription}>
          <strong className={styles.ItemTitle}>
            {" "}
            {obj.title
              .replaceAll("<b>", "")
              .replaceAll("</b>", "")
              .substr(0, 10) + (obj.title.length > 10 ? "..." : "")}
          </strong>
          <p className={styles.Price}>
            {" "}
            {Number(obj.price)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </p>
        </figcaption>

        {isMyWishPage ? (
          <Button onClick={GiftDelete}>삭제하기</Button>
        ) : (
          <Button disabled={obj.state == 1 && true} onClick={GiftSend}>
            {obj.state == 1 ? "이미 받은 선물입니다." : "선물하기"}
          </Button>
          // <button
          //   className={styles.SendButton}
          //   disabled={obj.state == 1 ? true : false}
          //   onClick={GiftSend}
          //   style={{
          //     cursor: obj.state == 1 ? "default	" : "pointer",
          //   }}
          // >
          //   {obj.state == 1 ? "이미 받은 선물입니다." : "선물하기"}
          // </button>
        )}
      </figure>
    </div>
  );
};

export default WishListItem;

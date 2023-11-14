import React, { useState, useEffect, useContext } from "react";
import styles from "styles/organisms/WishList.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { TeamC } from "../../context/Context";
import WishListItem from "../molecules/WishListItem";

const WishList = () => {
  // 사러가기 클릭 -> 트리공간에 뿌려주기
  const [Give, setGive] = useState([]);
  const router = useRouter();
  const { userLogin, setUserLogin } = useContext(TeamC);

  useEffect(() => {
    // 위시리스트
    userWishListGet();
  }, [router.query.userId]);

  const userWishListGet = () => {
    axios
      .get("/api/gift", { params: { userLogin: router.query.userId } })
      .then((res) => {
        console.log("res :", res);
        setGive(res.data.filter((obj) => obj.state === 0));
      });
  };
  console.log("Give :", Give);

  return (
    <div className={styles.WishList}>
      {Give &&
        Give?.sort((a, b) => a.state - b.state).map((obj, idx) => {
          return (
            <WishListItem
              key={idx}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
              obj={obj}
              idx={idx}
              setGive={setGive}
              userWishListGet={userWishListGet}
            />
          );
        })}
    </div>
  );
};

export default WishList;

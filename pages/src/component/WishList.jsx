import React, { useState, useEffect, useContext } from "react";
import styles from "@/styles/WishList.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { TeamC } from "../Context";
import WishListItem from "./WishListItem";

const WishList = () => {
  // 사러가기 클릭 -> 트리공간에 뿌려주기
  const [Give, setGive] = useState([]);
  const router = useRouter();
  const { userLogin, setUserLogin } = useContext(TeamC);

  useEffect(() => {
    // 위시리스트
    userWishListGet();
  }, [router.query.id, userLogin]);

  const userWishListGet = () => {
    axios
      .get("/api/gift", { params: { userLogin: router.query.id } })
      .then((res) => {
        setGive(res.data.filter((obj) => obj.state === 0));
      });
  };

  return (
    <ul className={styles.WishList}>
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
    </ul>
  );
};

export default WishList;

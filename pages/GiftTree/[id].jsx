import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { TeamC } from "../src/Context";
import ProductList from "../src/component/ProductList";
import { useRouter } from "next/router";
import styles from "@/styles/id.module.css";
import FriendsList from "../src/component/FriendsList";
import GiftTargetName from "../src/component/GiftTargetName";
import UserSearchButton from "../src/component/UserSearchButton";

const GiftRouteCom = () => {
  const router = useRouter();
  const { userLogin, setUserLogin } = useContext(TeamC);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (userLogin == false) {
      router.push("/");
    }
  }, [userLogin]);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.flexContainer}>
          <FriendsList />
          <UserSearchButton />
        </div>
        <GiftTargetName />
        <ProductList visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default GiftRouteCom;

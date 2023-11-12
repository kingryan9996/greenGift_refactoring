import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "styles/id.module.css";
import FriendsItem from "./FriendsItem";
import { useContext } from "react";
import { TeamC } from "../context/Context";

const FriendsList = () => {
  const { userLogin, setUserLogin } = useContext(TeamC);
  const [friendList, setFriendList] = useState();

  async function dataGet() {
    axios.get("/api").then((res) => {
      setFriendList(res.data.filter((obj) => obj.UserID != userLogin.UserID));
    });
  }

  useEffect(() => {
    dataGet();
  }, []);

  return (
    <ul className={styles.ulStyle}>
      {friendList?.map((obj, idx) => {
        return <FriendsItem key={idx} obj={obj} idx={idx} />;
      })}
    </ul>
  );
};

export default FriendsList;

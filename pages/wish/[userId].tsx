import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { TeamC } from "context/Context";
import { useRouter } from "next/router";
import styles from "styles/pages/WishPage.module.scss";
import FriendsList from "component/molecules/FriendsList";
import UserSearchButton from "component/molecules/SearchInputBox";
import BasicLayout from "component/layout/BasicLayout";
import axios from "axios";
import FriendsListBox from "component/organisms/FriendsListBox";
import Friend from "types/Friend";
import WishList from "component/organisms/WishList";
import ShoppingCart from "component/organisms/ShoppingCart";
import Button from "component/atoms/Button";

export default function WishPage() {
  const router = useRouter();
  const { userId } = router.query;
  const { userLogin, setUserLogin, userGiftBox, setUserGiftBox } =
    useContext(TeamC);
  const [visible, setVisible] = useState(false);
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [wishList, setWishList] = useState();
  const currentUserNickName = friendsList.find(
    (friend) => friend.UserID === Number(userId)
  )?.NickName;
  // console.log("userLogin :", userLogin);
  // console.log("userGiftBox :", userGiftBox);
  // console.log("wishList :", wishList);
  console.log("friendsList :", friendsList);

  useEffect(() => {
    if (userLogin && userGiftBox) {
      localStorageSave();
      // loadWishList();
      loadFriendsList();
    } else {
      localStorageLoad();
    }
  }, [userLogin, userGiftBox]);

  console.log("userLogin", userLogin);
  const localStorageSave = () => {
    if (userLogin && userGiftBox) {
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      localStorage.setItem("userGiftBox", JSON.stringify(userGiftBox));
    }
  };
  const localStorageLoad = () => {
    const localStorageUserLogin = localStorage.getItem("userLogin");
    const parseUserLogin = JSON.parse(localStorageUserLogin);
    setUserLogin(parseUserLogin);

    const localStorageUserGiftBox = localStorage.getItem("userGiftBox");
    const parseUserGiftBox = JSON.parse(localStorageUserGiftBox);
    setUserGiftBox(parseUserGiftBox);
  };
  const loadWishList = () => {
    axios.get("/api/gift", { params: { userLogin: userId } }).then((res) => {
      const wishList = res.data.filter((item) => item.state === 0);
      setWishList(wishList);
    });
  };

  const loadFriendsList = () => {
    axios.get("/api").then((res) => {
      const friendsList = res.data.filter(
        (friend) => friend.UserID !== userLogin.UserID
      );
      setFriendsList(friendsList);
    });
  };

  return (
    <BasicLayout>
      <div className={styles.WishPage}>
        <FriendsListBox friendsList={friendsList} />
        <div>{currentUserNickName ?? userLogin?.NickName}님의 위시리스트</div>
        <div>
          <WishList />
          {visible && <ShoppingCart />}
        </div>
        <Button
          active={visible && true}
          onClick={() => {
            setVisible(!visible);
            // numRef.current = 10;
          }}
        >
          {!visible ? "쇼핑" : "닫기"}
        </Button>
      </div>
    </BasicLayout>
  );
}

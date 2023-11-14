import styles from "styles/organisms/NavigationBox.module.scss";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { TeamC } from "../../context/Context";
import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBox() {
  const router = useRouter();
  const { userLogin } = useContext(TeamC);
  const isWishPage = router.pathname === "/wish/[userId]";
  const isUserPage = router.pathname === "/user/[userId]";
  const isMyWishPage = router.query.userId === userLogin?.UserID;

  const goToWishPage = () => {
    if (!isMyWishPage) {
      router.push(`/wish/${userLogin.UserID}`);
    }
  };
  const goToUserPage = () => {
    if (!isUserPage) {
      router.push(`/user/${userLogin.UserID}`);
    }
  };

  return (
    <div className={styles.NavigationBox}>
      <Button active={isWishPage && true} onClick={goToWishPage}>
        <FontAwesomeIcon icon={faGift} />
      </Button>
      {/* <span className={styles.coin}>
        코인 :{" "}
        {Number(userLogin.Coin)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span> */}
      <Button active={isUserPage && true} onClick={goToUserPage}>
        <FontAwesomeIcon icon={faUser} />
      </Button>
    </div>
  );
}

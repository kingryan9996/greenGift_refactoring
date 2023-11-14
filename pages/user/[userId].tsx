import React, { useContext, useEffect, useRef, useState } from "react";
import { TeamC } from "context/Context";
import { useRouter } from "next/router";
// import SentGiftBox from "component/sentGiftBox";
import GiftBox from "component/GiftBox";
import styles from "styles/MyPage.module.css";
import LogoutButton from "component/LogoutButton";
import UserProfile from "component/UserProfile";
import GiftCategoryButton from "component/GiftCategoryButton";
import BasicLayout from "component/layout/BasicLayout";

export default function UserPage() {
  const { userLogin, setUserLogin } = useContext(TeamC);
  const [giftVisible, setGiftVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userLogin == false) {
      router.push("/");
    }
  }, [userLogin]);

  return (
    <BasicLayout>
      <div className={styles.MyPageTop}>
        {/* <div className={styles.ProfileAreaWrap}>
          <LogoutButton setUserLogin={setUserLogin} />
          <UserProfile userLogin={userLogin} />
          <div className={styles.GiftTitle}>
            <GiftCategoryButton
              giftVisible={giftVisible}
              setGiftVisible={setGiftVisible}
              color={!giftVisible ? "#219bc3" : "#b2d3e1"}
              text={"받은"}
            />
            <GiftCategoryButton
              giftVisible={giftVisible}
              setGiftVisible={setGiftVisible}
              color={giftVisible ? "#219bc3" : "#b2d3e1"}
              text={"보낸"}
            />
          </div>
        </div>
        {giftVisible ? (
          <SentGiftBox userLogin={userLogin} />
        ) : (
          <GiftBox userLogin={userLogin} />
        )} */}
      </div>
    </BasicLayout>
  );
}

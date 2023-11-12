import React from "react";
import styles from "styles/MyPage.module.css";

const UserProfile = ({ userLogin }) => {
  return (
    <div className={styles.profileWrap}>
      <div>
        <p className={styles.profileImgWrap}>
          <img
            className={styles.profileImg}
            src={`/img/Profile${(userLogin.UserID % 10) + 1}.jpg`}
          />
        </p>
        <p className={styles.GiftBoxWrap}>{userLogin?.NickName}</p>
      </div>
    </div>
  );
};

export default UserProfile;

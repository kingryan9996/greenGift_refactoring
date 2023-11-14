import React from "react";
import Friend from "types/Friend";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/molecules/FriendsList.module.scss";

interface FriendsListProps {
  friendsList: Friend[];
}

const FriendsList = ({ friendsList }: FriendsListProps) => {
  return (
    <div className={styles.FriendsList}>
      {friendsList.map((obj, idx) => {
        {
          /* {Array(4)
        .fill(0)
        .map((obj, idx) => { */
        }
        return <FriendsItem key={idx} obj={obj} idx={idx} />;
      })}
    </div>
  );
};

export default FriendsList;

const FriendsItem = ({ obj, idx }) => {
  const router = useRouter();
  console.log("! ", router.query.userId);
  console.log("^^ ", obj.UserID);

  return (
    <div
      key={idx}
      className={`${
        router.query.userId === obj.UserID.toString() && styles.active
      }`}
    >
      <Link href={`/wish/${obj.UserID}`}>
        <figure className={styles.imgFigure}>
          <img
            className={`${
              router.query.userId === obj.UserID.toString() && styles.active
            }`}
            src={`/img/Profile${(obj.UserID % 10) + 1}.jpg`}
            // style={{
            //   filter:
            //     router.query.userId == obj.UserID
            //       ? "grayscale(0%)"
            //       : "grayscale(100%)",
            // }}
          />
          <figcaption>{obj.NickName}</figcaption>
        </figure>
      </Link>
    </div>
  );
};

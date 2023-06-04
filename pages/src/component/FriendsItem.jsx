import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/id.module.css";

const FriendsItem = ({ obj, idx }) => {
  const router = useRouter();

  return (
    <li className={styles.liStyle} key={idx}>
      <Link href={`/GiftTree/${obj.UserID}`}>
        <figure className={styles.imgFigure}>
          <img
            className={styles.imgStyle}
            src={`/img/Profile${(obj.UserID % 10) + 1}.jpg`}
            style={{
              filter:
                router.query.id == obj.UserID
                  ? "grayscale(0%)"
                  : "grayscale(100%)",
            }}
          />
          <figcaption>
            <strong className={styles.strong12}>{obj.NickName}</strong>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default FriendsItem;

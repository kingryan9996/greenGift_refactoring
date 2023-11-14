import styles from "styles/organisms/FriendsListBox.module.scss";
import FriendsList from "component/molecules/FriendsList";
import UserSearchButton from "component/molecules/SearchInputBox";
import Friend from "types/Friend";

interface FriendsListBoxProps {
  friendsList: Friend[];
}
export default function FriendsListBox({ friendsList }: FriendsListBoxProps) {
  return (
    <div className={styles.FriendsListBox}>
      <FriendsList friendsList={friendsList} />
      <UserSearchButton />
    </div>
  );
}

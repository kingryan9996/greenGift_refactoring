import styles from "styles/pages/LoginPage.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { TeamC } from "../context/Context";
import { useState } from "react";
import LoginForm from "component/organisms/LoginForm";
import SignUpForm from "component/organisms/SignUpForm";

export default function Home() {
  const { setUserLogin, setUserGiftBox } = useContext(TeamC);
  const router = useRouter();

  const handleLogin = (id: string, password: string) => {
    if (id === "") {
      return alert("ID를 입력해주세요.");
    } else if (password === "") {
      return alert("PW를 입력해주세요.");
    } else {
      axios
        .get("/api", { LoginID: id })
        .then((res) => {
          console.log(res);
          let newValue = res?.data?.find((obj) => obj.LoginID == id);

          console.log(newValue, "newValue");
          if (!newValue) {
            return alert("등록되지 않은 ID입니다.");
          } else if (newValue.LoginPW != password) {
            return alert("비밀번호를 확인해주세요.");
          } else {
            setUserLogin(newValue);
            axios
              .get("api/gift", { params: { userLogin: newValue.UserID } })
              .then((res) => {
                setUserGiftBox(res.data);
              })
              .then(() => {
                router.push(`/wish/${newValue.UserID}`);
              });
          }
        })
        .catch((e) => alert(e));
    }
  };

  function formSignUp(e) {
    e.preventDefault();

    axios.post("/api", {
      LoginID: e.target.signid.value,
      LoginPW: e.target.signpasswords.value,
      NickName: e.target.nickname.value,
      Birth: e.target.birthday.value,
    });
  }

  const handleSignUp = () => {};

  return (
    <div className={styles.LoginPage}>
      <div>
        <p>
          <span>소중한 사람에게</span>
          <span>마음을 전해보세요!</span>
        </p>
        <p>
          <span>내가 받고싶은 선물을 위시리스트에 담아보세요</span>
          <span>위시리스트를 공유하고, 선물을 주고받아보세요</span>
        </p>
      </div>
      <LoginForm formLogin={handleLogin} />
      <SignUpForm />
    </div>
  );
}

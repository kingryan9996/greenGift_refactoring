import { Inter } from "@next/font/google";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { TeamC } from "../context/Context";
import { useState } from "react";
import { Translate } from "@mui/icons-material";
import styles from "styles/index.module.css";
import Input from "../component/atoms/Input";
import Button from "component/atoms/Button";
import LoginForm from "component/organisms/LoginForm";
import LoginPage from "component/templates/LoginPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { userLogin, setUserLogin } = useContext(TeamC);
  const router = useRouter();

  const [loginValue, setLoginValue] = useState<{
    id: string;
    password: string;
  }>({ id: "", password: "" });

  // const [userId, setUserId] = useState<string>("");
  // const [userPassword, setUserPassword] = useState<string>("");

  console.log("loginValue", loginValue);

  const [modalOpen, setModalOpen] = useState(false);

  function formLogin(e) {
    e.preventDefault();
    console.log("e : ", e);
    if (loginValue.id == "") {
      return alert("ID를 입력해주세요.");
    } else if (loginValue.password == "") {
      return alert("PW를 입력해주세요.");
    }

    try {
      axios.get("/api", { LoginID: loginValue.id }).then((res) => {
        console.log(res);
        let newValue = res?.data?.find((obj) => obj.LoginID == loginValue.id);

        console.log(newValue, "newValue");
        if (newValue.length === 0) {
          return alert("등록되지 않은 ID입니다.");
        } else if (newValue.LoginPW != loginValue.password) {
          return alert("비밀번호를 확인해주세요.");
        } else if (newValue.LoginPW == loginValue.password) {
          setUserLogin(newValue);
          router.push(`/GiftTree/${newValue.UserID}`);
        }
      });
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  }

  function formSignUp(e) {
    e.preventDefault();

    axios.post("/api", {
      LoginID: e.target.signid.value,
      LoginPW: e.target.signpasswords.value,
      NickName: e.target.nickname.value,
      Birth: e.target.birthday.value,
    });
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <LoginPage />
    </>
  );
}

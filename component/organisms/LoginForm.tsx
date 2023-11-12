import styles from "styles/organisms/LoginForm.module.scss";
import axios from "axios";
import Button from "component/atoms/Button";
import Input from "component/atoms/Input";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginForm() {
  const [loginValue, setLoginValue] = useState<{
    id: string;
    password: string;
  }>({ id: "", password: "" });

  const formLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.LoginForm} method="post" onSubmit={formLogin}>
        <Input
          value={loginValue.id}
          onChange={(res) => {
            setLoginValue({ ...loginValue, id: res });
          }}
          placeholder="아이디"
        />
        <Input
          value={loginValue.password}
          onChange={(res) => {
            setLoginValue({ ...loginValue, password: res });
          }}
          placeholder="비밀번호"
        />
        <Button>로그인</Button>
      </form>
    </div>
  );
}

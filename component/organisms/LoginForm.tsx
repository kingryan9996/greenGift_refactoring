import styles from "styles/organisms/LoginForm.module.scss";
import Button from "component/atoms/Button";
import Input from "component/atoms/Input";
import { useState } from "react";

interface LoginFormType {
  formLogin: (id: string, password: string) => void;
}
export default function LoginForm({ formLogin }: LoginFormType) {
  const [loginValue, setLoginValue] = useState<{
    id: string;
    password: string;
  }>({ id: "", password: "" });

  return (
    <div>
      <form
        className={styles.LoginForm}
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          formLogin(loginValue.id, loginValue.password);
        }}
      >
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

import styles from "styles/templates/LoginPage.module.scss";
import LoginForm from "component/organisms/LoginForm";
import SignUpForm from "component/organisms/SignUpForm";

export default function LoginPage() {
  const handleLogin = () => {};
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
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

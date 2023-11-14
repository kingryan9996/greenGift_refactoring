import styles from "styles/organisms/SignUpForm.module.scss";
import { useState } from "react";
import Input from "component/atoms/Input";
import Button from "component/atoms/Button";
import Modal from "component/atoms/Modal";

interface SignUpValue {
  id: string;
  password: string;
  birth: string;
  nickName: string;
}
export default function SignUpForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpValue, setSignUpValue] = useState<SignUpValue>({
    id: "",
    password: "",
    birth: "",
    nickName: "",
  });

  return (
    <>
      <div className={styles.SignUpForm}>
        <span>계정이 없으신가요?</span>
        <button
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
        >
          회원가입
        </button>
      </div>
      {modalOpen && (
        <SignUpModal
          signUpValue={signUpValue}
          setSignUpValue={setSignUpValue}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
}

interface SignUpModalType {
  signUpValue: SignUpValue;
  setSignUpValue: React.Dispatch<React.SetStateAction<SignUpValue>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUpModal = ({
  signUpValue,
  setSignUpValue,
  setModalOpen,
}: SignUpModalType) => {
  return (
    <Modal>
      <div className={styles.SignUpModal}>
        <Button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          x
        </Button>
        <form onSubmit={() => {}} className={styles.modalForm}>
          <div className={styles.modalInputWrapper}>
            <Input
              value={signUpValue.id}
              onChange={(res) => {
                setSignUpValue({ ...signUpValue, id: res });
              }}
              placeholder="아이디"
            />
          </div>

          <div className={styles.modalInputWrapper}>
            <Input
              value={signUpValue.password}
              onChange={(res) => {
                setSignUpValue({ ...signUpValue, password: res });
              }}
              placeholder="비밀번호"
            />
          </div>

          <div className={styles.modalInputWrapper}>
            <Input
              value={signUpValue.birth}
              onChange={(res) => {
                setSignUpValue({ ...signUpValue, birth: res });
              }}
              placeholder="생일"
            />
          </div>

          <div className={styles.modalInputWrapper}>
            <Input
              value={signUpValue.nickName}
              onChange={(res) => {
                setSignUpValue({ ...signUpValue, nickName: res });
              }}
              placeholder="닉네임"
            />
          </div>
          <Button>회원가입</Button>
        </form>
      </div>
    </Modal>
  );
};

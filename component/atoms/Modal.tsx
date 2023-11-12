import styles from "styles/atoms/Modal.module.scss";
import Dimmed from "./Dimmed";
interface ModalType {
  children: React.ReactNode;
}
export default function Modal({ children }: ModalType) {
  return (
    <Dimmed>
      <div className={styles.Modal}>{children}</div>
    </Dimmed>
  );
}

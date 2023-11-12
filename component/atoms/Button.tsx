import styles from "styles/atoms/Button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  property?: Record<string, string | number | boolean>;
}
export default function Button({ children, onClick, property }: ButtonProps) {
  return (
    <button className={styles.Button} onClick={onClick} {...property}>
      {children}
    </button>
  );
}

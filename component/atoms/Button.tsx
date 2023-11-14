import styles from "styles/atoms/Button.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  property?: Record<string, string | number | boolean>;
  active?: boolean;
  disabled?: boolean;
}
export default function Button({
  children,
  onClick,
  property,
  active,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles.Button} ${active ? styles.active : "false"} ${
        disabled ? styles.disabled : "able"
      }`}
      onClick={onClick}
      {...property}
    >
      {children}
    </button>
  );
}

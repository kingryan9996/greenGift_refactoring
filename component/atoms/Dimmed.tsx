import styles from "styles/atoms/Dimmed.module.scss";
interface DimmedType {
  children: React.ReactNode;
}
export default function Dimmed({ children }: DimmedType) {
  return <div className={styles.Dimmed}>{children}</div>;
}

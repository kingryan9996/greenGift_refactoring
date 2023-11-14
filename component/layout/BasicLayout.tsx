import styles from "styles/layout/BasicLayout.module.scss";
import NavBar from "component/organisms/NavigationBox";

interface BasicLayoutType {
  children: React.ReactNode;
}
export default function BasicLayout({ children }: BasicLayoutType) {
  return (
    <div className={styles.BasicLayout}>
      <div>{children}</div>
      <NavBar />
    </div>
  );
}

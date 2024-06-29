import Header from "../entities/header/Header";
import Main from "../pages/main/Main";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
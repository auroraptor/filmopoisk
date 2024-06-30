import Content from "../../shared/components/content/Content";
import Films from "../../widgets/films/Films";
import Filters from "../../widgets/filters/Filters";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Filters />
      <Content>
      <Films />
      </Content>
    </main>
  );
}

export default Main;

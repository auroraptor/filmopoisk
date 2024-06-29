import Content from "../../shared/components/content/Content";
import Films from "../../widgets/films/Films";
import Filters from "../../widgets/filters/Filters";
import SearchInput from '../../features/searchInput/SearchInput';
import styles from "./Main.module.css";


function Main() {
  return (
    <main className={styles.main}>
      <Filters />
      <Content>
        <SearchInput />
        <Films />
      </Content>
    </main>
  );
}

export default Main;

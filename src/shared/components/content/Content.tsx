import { ReactNode } from "react";
import styles from "./Content.module.css";

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: ContentProps) {
  return <section className={styles.content}>{children}</section>;
}

export default Content;

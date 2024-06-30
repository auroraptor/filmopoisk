import { ReactNode } from "react";
import styles from "./Content.module.css";

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: ContentProps) {
  return <article className={styles.content}>{children}</article>;
}

export default Content;

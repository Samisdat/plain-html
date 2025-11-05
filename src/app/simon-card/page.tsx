import { Navi } from "../components/Navi";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navi />
      <h1>Simon</h1>
    </div>
  );
}

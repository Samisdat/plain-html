import { Navi } from "../components/Navi";
import styles from "./page.module.css";

const CardContent = ()=>(
    <>
      <h1 className={styles.h1}> Hello World</h1>
      <h2 className={styles.h2}>Hello World</h2>
      <h3 className={styles.h3}>Hello World</h3>
      <h4 className={styles.h4}>Hello World</h4>
      <h5 className={styles.h5}>Hello World</h5>
      <h6 className={styles.h6}>Hello World</h6>
      <p className={styles.p}>Hello World</p>
    </>
)

export default function Home() {
  return (
    <div className={styles.page}>
      <Navi />
      <h1>Grid Layout</h1>
      <div className={styles.pageContainer}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
          <div className={styles.card}>
            <CardContent />
          </div>
        </div>
      </div>
    </div>
  );
}

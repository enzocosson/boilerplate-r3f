/* eslint-disable react/no-unknown-property */
import styles from "./Shorts.module.scss";

export function Shorts() {
  return (
    <div className={styles.container}>
      <div className={styles.converture}>
        <img src="/assets/img/couverture.png" alt="couverture" />
      </div>

      <div className={styles.home}></div>
    </div>
  );
}

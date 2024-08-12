/* eslint-disable react/no-unknown-property */
import styles from "./Videos.module.scss";

export function Videos() {
  return (
    <div className={styles.container}>
      <div className={styles.converture}>
        <img src="/assets/img/couverture.png" alt="couverture" />
      </div>
      <div className={styles.home}></div>
    </div>
  );
}

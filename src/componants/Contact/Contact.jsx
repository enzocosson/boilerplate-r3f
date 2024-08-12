/* eslint-disable react/no-unknown-property */
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.converture}>
        <img src="/assets/img/couverture.png" alt="couverture" />
      </div>

      <div className={styles.home}></div>
    </div>
  );
}

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={`${styles.main}`}>
        <p>Copyright © 2024 | Boilerplate R3F</p>
        <span>Enzo Cosson</span>
      </div>
    </div>
  );
}

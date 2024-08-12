/* eslint-disable react/no-unknown-property */
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.converture}>
        <img src="/assets/img/couverture.png" alt="couverture" />
      </div>

      <div className={styles.container__albums}>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_bali.png" alt="" />
        </a>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_paris.png" alt="" />
        </a>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_cars.png" alt="" />
        </a>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_ile_maurice.png" alt="" />
        </a>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_tipsy.png" alt="" />
        </a>
        <a href="#" className={styles.albums}>
          <img src="/assets/img/album_architectural.png" alt="" />
        </a>
      </div>
    </div>
  );
}

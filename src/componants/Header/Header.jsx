import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  const location = useLocation();

  console.log("Rendering Header component...");

  return (
    <div className={`${styles.container__header}`}>
      <div className={`${styles.main}`}>
        <NavLink to="/" className={`${styles.logo}`}>
          R3F
        </NavLink>
        <div className={`${styles.nav}`}>
          <NavLink
            to="/"
            className={`${styles.link} ${
              location.pathname === "/" ? styles.activeLink : ""
            }`}
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import { Header } from "./componants/Header/Header";
import { Footer } from "./componants/Footer/Footer";
import { Home } from "./componants/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loader from "./componants/Loader/Loader";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Router>
        <div className={`${styles.main}`}>
          {/* <Loader /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />

          {/* <div className={`${styles.background}`}>
            <div className={`${styles.container__color__background}`}>
              <span
                className={`${styles.red__circle} ${styles.red__circle__1}`}
              ></span>
              <span
                className={`${styles.red__circle} ${styles.red__circle__2}`}
              ></span>
              <span
                className={`${styles.red__circle} ${styles.red__circle__3}`}
              ></span>
            </div>
          </div> */}
        </div>
      </Router>
    </>
  );
}

export default App;

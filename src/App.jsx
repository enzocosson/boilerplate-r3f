import { Header } from "./componants/Header/Header";
import { Footer } from "./componants/Footer/Footer";
import { Home } from "./componants/Home/Home";
import { Videos } from "./componants/Videos/Videos";
import { Shorts } from "./componants/Shorts/Shorts";
import { About } from "./componants/About/About";
import { Contact } from "./componants/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loader from "./componants/Loader/Loader";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Router>
        <div className={`${styles.main}`}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="videos" element={<Videos />} />
            <Route path="shorts" element={<Shorts />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

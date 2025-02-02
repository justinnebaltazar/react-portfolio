import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

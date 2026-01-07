import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
function App() {
  return (
    <div style={{
      width: "100%",
      maxWidth: "100vw",
      overflowX: "hidden",
      position: "relative",
    }}>
      <AnimatedBackground/>
      <Navbar/>
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
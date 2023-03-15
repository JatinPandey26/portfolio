import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomeSection from "./Components/HomeSection/HomeSection";
import Codesection from "./Components/CodeSection/Codesection";
import { useLayoutEffect, useRef } from "react";
import MarqueBars from "./Components/CodeSection/MarqueeBars/MarqueBars";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Projects from "./Components/Projects/Projects";
import TextSpin from "./Components/TextSpin/TextSpin";
import { Experience, Education } from "./Components/Experience/Experience";

function App() {
  const mouseRef = useRef(null);
  useLayoutEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      mouseRef.current.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <Education />
      <Experience />
      <TextSpin />
      <Codesection />
      <MarqueBars />
      <Projects />
      <Gallery />
      <Footer />
      <div
        className="primary-cursor h-5 w-5 rounded-[50%] bg-[#DE1111] absolute z-[1000]"
        ref={mouseRef}
      ></div>
    </div>
  );
}

export default App;

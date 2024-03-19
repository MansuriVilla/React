import "./App.css";
import Header from "./components/header";
import React, { useRef, useEffect } from "react";
import Aboutus from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Support from "./pages/support";
import Ourproduct from "./pages/ourproduct";
import Home from "./pages/home";
import "./js/mainjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  let main = useRef(null);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    useEffect(() => {
      const el = main.current;
      gsap.fromTo(
        el,
        { padding: 50 },
        {
          padding: "150 150 50",
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            markers: true,
            start: "9% 20%",
            end: "80% 80%",
          },
        }
      );
    }, []);
  });

  mm.add("(max-width: 799px)", () => {
    useEffect(() => {
      const el = main.current;
      gsap.fromTo(
        el,
        { padding: 10 },
        {
          padding: "30",
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            markers: true,
            start: "10% 20%",
            end: "80% 80%",
          },
        }
      );
    }, []);
  });

  return (
    <>
      <div id="main" ref={main}>
        <div className="navbar">
          <div className="hero-main">
            <Header />
            <div className="container">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Ourproduct" element={<Ourproduct />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

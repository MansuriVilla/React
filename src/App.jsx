import React, { useRef, useEffect, forwardRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/header";
import Footer from "./components/footer";
import Aboutus from "./pages/About";
import Support from "./pages/support";
import Ourproduct from "./pages/ourproduct";
import Home from "./pages/home";
import "./App.css";
import "./css/style.loco.css";

gsap.registerPlugin(ScrollTrigger);

const App = forwardRef((props, ref) => {
  const main = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 800px)");

    const animateMain = () => {
      const eld = main.current;
      if (mq.matches) {
        gsap.fromTo(
          eld,
          { padding: 50 },
          {
            padding: "150px 150px 50px",
            duration: 0.5,
            scrollTrigger: {
              trigger: eld,
              scrub: true,
              markers: true,
              start: "9% 20%",
              end: "80% 80%",
            },
          }
        );
      } else {
        gsap.fromTo(
          eld,
          { padding: 10 },
          {
            padding: "30px",
            duration: 0.5,
            scrollTrigger: {
              trigger: eld,
              scrub: true,
              markers: true,
              start: "10% 20%",
              end: "80% 80%",
            },
          }
        );
      }
    };

    animateMain(); // Initial animation

    // Listen for changes in window width
    const mqChangeHandler = () => {
      animateMain();
    };
    mq.addEventListener("change", mqChangeHandler);

    // Cleanup event listener
    return () => {
      mq.removeEventListener("change", mqChangeHandler);
    };
  }, []);

  useEffect(() => {
    // Using Locomotive Scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".smooth-scroll", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.update(); // Update LocomotiveScroll instance on route change
    }
  }, [location, ref]);

  return (
    <>
      <div id="main" className="smooth-scroll" data-scroll-container ref={main}>
        <div className="main-inner">
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
      <Analytics />
      <SpeedInsights />
    </>
  );
});

export default App;

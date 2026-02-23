import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Lectures from "./pages/Lectures/Lectures"
import Projects from "./pages/Projects/Projects"
import ProjectPreview from "./pages/Projects/ProjectPreview"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import gsap from "gsap"
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(()=>{
    const lenis = new Lenis({
      duration: 1.2,
      smooth:true,
      smoothTouch:true,
  });

  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  //important for scrolltrigger to work with lenis
  lenis.on("scroll",ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time*1000);
    });

    gsap.ticker.lagSmoothing(0); // disable lag smoothing to prevent jittery animations
  })
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectPreview />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

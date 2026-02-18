import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Lectures from "./pages/Lectures/Lectures"
import Projects from "./pages/Projects/Projects"

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

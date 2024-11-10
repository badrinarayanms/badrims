import { Route, Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './index.css'
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  

  return (
    <div>
     
        <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    
    </div>
          
          
      
    
  )
}

export default App


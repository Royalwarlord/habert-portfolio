import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RotaryTaveta from "./pages/RotaryTaveta";
import DropZone from "./pages/DropZone";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/rotary-taveta" element={<RotaryTaveta />} />
        <Route path="/projects/drop-zone" element={<DropZone />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
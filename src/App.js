import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { DarkContext } from "./context/DarkContext";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <DarkContext.Provider value={[dark, setDark]}>
      {/* min-h-screen to have a full background cover */}
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-900 p-10">
        {!dark ? <div>toto</div> : <div>Pastoto</div>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </DarkContext.Provider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className="h-[100vh] bg-slate-400">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

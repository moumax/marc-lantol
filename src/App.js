import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";

function App() {
  const [dark, setDark] = useState(true);

  const switcher = () => {
    if (dark) {
      console.warn(dark);
      setDark(false);
    } else {
      console.warn(dark);
      setDark(true);
    }
  };
  return (
    <>
      <div className="flex left-1/2 absolute m-4">
        <div className="form-check form-switch">
          <input
            className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-black bg-no-repeat bg-contain checked:bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={switcher}
          ></input>
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexSwitchCheckDefault"
          >
            White Mode
          </label>
        </div>
      </div>

      {dark ? (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-900 p-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-r bg-white p-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

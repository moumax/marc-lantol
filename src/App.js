import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { DarkContext } from "./context/DarkContext";
import { LangContext } from "./context/LangContext";

function App() {
  const [dark, setDark] = useState(false);
  const [french, setFrench] = useState(true);

  const switcher = () => {
    if (dark) {
      console.warn(dark);
      setDark(false);
    } else {
      console.warn(dark);
      setDark(true);
    }
  };
  const langSwitcher = () => {
    if (french) {
      console.warn(french);
      setFrench(false);
    } else {
      console.warn(french);
      setFrench(true);
    }
  };

  return (
    <>
      <DarkContext.Provider value={[dark, setDark]}>
        <LangContext.Provider value={[french, setFrench]}>
          <div className="flex absolute left-1/2 m-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-black bg-no-repeat bg-contain checked:bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={switcher}
              ></input>
              {dark ? (
                <label
                  className="form-check-label inline-block text-black"
                  htmlFor="flexSwitchCheckDefault"
                >
                  White Mode
                </label>
              ) : (
                <label
                  className="form-check-label inline-block text-white"
                  htmlFor="flexSwitchCheckDefault"
                >
                  White Mode
                </label>
              )}
            </div>
          </div>
          <div className="flex absolute left-40 m-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-black bg-no-repeat bg-contain checked:bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                type="checkbox"
                role="switch"
                id="flexSwitchCheck"
                onClick={langSwitcher}
              ></input>
              {french ? (
                <label
                  className="form-check-label inline-block text-black"
                  htmlFor="flexSwitchCheck"
                >
                  Français
                </label>
              ) : (
                <label
                  className="form-check-label inline-block text-black"
                  htmlFor="flexSwitchCheck"
                >
                  English
                </label>
              )}
            </div>
          </div>
          {dark === false ? (
            <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-900 p-10">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          ) : (
            <div className="min-h-screen bg-white p-10">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </div>
          )}
        </LangContext.Provider>
      </DarkContext.Provider>
    </>
  );
}

export default App;

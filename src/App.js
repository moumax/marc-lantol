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
  const [dark, setDark] = useState(true);
  const [french, setFrench] = useState(true);

  // Append className for darkMode on buttons
  let className = "form-check-label inline-block";
  if (dark === true) {
    className += " text-white";
  } else {
    className += " text-black";
  }

  const switcher = () => {
    if (!dark) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  const langSwitcher = () => {
    if (french) {
      setFrench(false);
    } else {
      setFrench(true);
    }
  };

  return (
    <>
      <DarkContext.Provider value={[dark, setDark]}>
        <LangContext.Provider value={[french, setFrench]}>
          <div className="flex absolute left-1/3 m-4 top-8">
            <div className="form-check form-switch">
              <input
                className="mr-3 appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={switcher}
              ></input>
              {dark ? (
                <label
                  className="form-check-label inline-block text-white"
                  htmlFor="flexSwitchCheckDefault"
                >
                  White Mode
                </label>
              ) : (
                <label
                  className="form-check-label inline-block text-black"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              )}
            </div>
          </div>
          <div className="flex absolute right-1/3 m-4 top-8 ml-56">
            <div className="form-check form-switch">
              <input
                className="mr-3 appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={langSwitcher}
              ></input>
              {french ? (
                <label className={className} htmlFor="flexSwitchCheck">
                  Français
                </label>
              ) : (
                <label className={className} htmlFor="flexSwitchCheck">
                  English
                </label>
              )}
            </div>
          </div>
          {dark === true ? (
            <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-900 p-10">
              <Routes>
                <Route path="/marc-lantol" element={<Home />} />
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

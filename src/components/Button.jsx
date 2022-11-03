import { useContext } from "react";
import { DarkContext } from "../context/DarkContext";

const Button = (props) => {
  const [dark, setDark] = useContext(DarkContext);

  if (dark === false) {
    return (
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  } else
    return (
      <button
        className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
};

export default Button;

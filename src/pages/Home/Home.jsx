import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/Button";
import { LangContext } from "../../context/LangContext";

export function Home() {
  const navigate = useNavigate();
  const [french] = useContext(LangContext);

  const buttonHome =
    "inline-block px-14 py-8 bg-blue-600 text-white font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";

  return (
    <div className="text-center">
      {french ? (
        <div className="mt-60">
          <h1 className="text-6xl mb-14 text-black">Bonjour !</h1>
          <p className="text-4xl mb-20 text-black">
            Je m'appelle Marc et je suis Développeur web Full Stack...
          </p>
          <Button
            className={buttonHome}
            type={"button"}
            onClick={() => navigate("/about")}
          >
            En savoir plus à mon sujet?
          </Button>
        </div>
      ) : (
        <div className="mt-60">
          <h1 className="text-6xl mb-14 text-black">Hello !</h1>
          <p className="text-4xl mb-20 text-black">
            My name is Marc and I'am a Full Stack web developer...
          </p>
          <Button
            className={buttonHome}
            type={"button"}
            onClick={() => navigate("/about")}
          >
            Want to learn more about me?
          </Button>
        </div>
      )}
    </div>
  );
}

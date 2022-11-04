import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/Button";
import { LangContext } from "../../context/LangContext";

export function Home() {
  const navigate = useNavigate();
  const [french] = useContext(LangContext);

  return (
    <div className="text-center ">
      {french ? (
        <div className="mt-60">
          <h1 className="text-6xl mb-14 text-black">Bonjour !</h1>
          <p className="text-4xl mb-14 text-black">
            Je m'appelle Marc et je suis Développeur web Full Stack...
          </p>
          <Button type={"button"} onClick={() => navigate("/about")}>
            En savoir plus à mon sujet?
          </Button>
        </div>
      ) : (
        <div className="mt-60">
          <h1 className="text-6xl mb-14 text-black">Hello !</h1>
          <p className="text-4xl mb-14 text-black">
            My name is Marc and I'am a Full Stack web developer...
          </p>
          <Button type={"button"} onClick={() => navigate("/about")}>
            Want to learn more about me?
          </Button>
        </div>
      )}
    </div>
  );
}

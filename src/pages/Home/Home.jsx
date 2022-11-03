import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/Button";
import { LangContext } from "../../context/LangContext";

export function Home() {
  const navigate = useNavigate();
  const [french, setFrench] = useContext(LangContext);

  return (
    <div className="text-center ">
      {french ? (
        <>
          <h1 className="text-4xl">Bonjour !</h1>
          <p className="text-2xl">Marc LANTOL</p>
          <p>Développeur web Full Stack</p>
          <Button type={"button"} onClick={() => navigate("/about")}>
            Continuer
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-4xl">Hello !</h1>
          <p className="text-2xl">Marc LANTOL</p>
          <p>Full Stack web developer</p>
          <Button type={"button"} onClick={() => navigate("/about")}>
            Continue
          </Button>
        </>
      )}
    </div>
  );
}

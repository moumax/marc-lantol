import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center ">
      <h1 className="text-4xl">Bonjour !</h1>
      <p className="text-2xl">Je m'appelle Marc LANTOL</p>
      <p>Je suis développeur Full Stack</p>
      <Button type={"button"} onClick={() => navigate("/about")}>
        Continuer
      </Button>
    </div>
  );
}

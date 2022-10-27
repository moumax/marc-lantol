import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PortfolioDatas from "../../datas/PortfolioDatas";

export function Projects() {
  const navigate = useNavigate();
  return (
    //mx-auto to on div and image to center image
    <div className="flex flex-col items-center  mx-auto">
      <h1 className="text-6xl mb-14">Mes projects</h1>
      {PortfolioDatas.map((data) => (
        <div className="flex flex-col items-center">
          <h2 className="text-4xl mb-5">{data.titre}</h2>
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            <img
              className="w-fit rounded-3xl  mx-auto mb-6"
              src={data.image}
              alt={data.image}
            />
          </a>
          <p className="mb-2 text-3xl w-2/3">{data.description}</p>
          <ul className="mb-12 text-2xl">
            <li className={data.techno1 ? "techno" : "techno0"}>
              {data.techno1}
            </li>
            <li className={data.techno2 ? "techno" : "techno0"}>
              {data.techno2}
            </li>
            <li className={data.techno3 ? "techno" : "techno0"}>
              {data.techno3}
            </li>
            <li className={data.techno4 ? "techno" : "techno0"}>
              {data.techno4}
            </li>
            <li className={data.techno5 ? "techno" : "techno0"}>
              {data.techno5 ? data.techno5 : ""}
            </li>
          </ul>
        </div>
      ))}
      <Button onClick={() => navigate("/contact")}>Me contacter</Button>
      <Button onClick={() => navigate("/")}>Suivant</Button>
    </div>
  );
}

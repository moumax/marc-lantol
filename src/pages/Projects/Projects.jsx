import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PortfolioDatas from "../../datas/PortfolioDatas";

export function Projects() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-14">Mes projects</h1>
      {PortfolioDatas.map((data) => (
        // Problem to center the image
        <div className="flex flex-col items-center">
          <a href={data.lien} target="_blank" rel="noopener noreferrer">
            <img
              className="w-3/4 rounded-3xl"
              src={data.image}
              alt={data.image}
            />
          </a>
          <p>{data.description}</p>
          <ul>
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

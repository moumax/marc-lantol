import React from "react";
import Button from "../../components/Button";
import HardSkills from "../../components/HardSkills";
import HardSkill from "../../datas/HardSkill";
import SoftSkills from "../../components/SoftSkills";
import SoftSkill from "../../datas/SoftSkill";
import Hobbies from "../../components/Hobbies";
import Hobbie from "../../datas/Hobbie";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-5xl text-center mb-36">A propos</h1>
      <h2 className="text-3xl m-4 text-center">Soft skills</h2>
      <div className="flex gap-20 justify-center mb-20">
        {SoftSkill.map((skill) => (
          <SoftSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-3xl m-4 text-center">Hard skills</h2>
      <div className="flex gap-20 justify-center mb-20">
        {HardSkill.map((skill) => (
          <HardSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-3xl m-4 text-center">Hobbies</h2>
      <div className="flex gap-20 justify-center">
        {Hobbie.map((like) => (
          <Hobbies like={like} key={like.id} />
        ))}
      </div>
      <Button onClick={() => navigate("/")}>Accueil</Button>
      <Button onClick={() => navigate("/contact")}>Contactez moi</Button>
    </div>
  );
}

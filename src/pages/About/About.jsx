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
      <h2 className="text-3xl m-4 text-center">Soft skills</h2>
      <div className="flex gap-20 justify-center mb-10 flex-wrap">
        {SoftSkill.map((skill) => (
          <SoftSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-3xl m-4 text-center">Hard skills</h2>
      <div className="flex gap-20 justify-center mb-10 flex-wrap">
        {HardSkill.map((skill) => (
          <HardSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-3xl m-4 text-center">Hobbies</h2>
      <div className="flex gap-20 justify-center flex-wrap">
        {Hobbie.map((like) => (
          <Hobbies like={like} key={like.id} />
        ))}
      </div>
      <Button onClick={() => navigate("/")}>Accueil</Button>
      <Button onClick={() => navigate("/contact")}>Contactez moi</Button>
    </div>
  );
}

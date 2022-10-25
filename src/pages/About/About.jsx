import React from "react";
import Button from "../../components/Button";
import HardSkills from "../../components/HardSkills";
import HardSkill from "../../datas/HardSkill";
import SoftSkills from "../../components/SoftSkills";
import SoftSkill from "../../datas/SoftSkill";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-5xl text-center mb-36">A propos</h1>
      <h2 className="text-3xl m-4 text-center">Soft skills</h2>
      <div className="flex gap-10 justify-center mb-36">
        {SoftSkill.map((skill) => (
          <SoftSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <h2 className="text-3xl m-4 text-center">Hard skills</h2>
      <div className="flex gap-20 justify-center">
        {HardSkill.map((skill) => (
          <HardSkills skill={skill} key={skill.id} />
        ))}
      </div>
      <Button onClick={() => navigate("/")}>Accueil</Button>
    </div>
  );
}
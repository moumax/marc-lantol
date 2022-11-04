import { useContext } from "react";
import Button from "../../components/Button";
import HardSkills from "../../components/HardSkills";
import HardSkill from "../../datas/HardSkill";
import SoftSkills from "../../components/SoftSkills";
import SoftSkill from "../../datas/SoftSkill";
import SoftSkillEnglish from "../../datas/SoftSkillEnglish";
import Hobbies from "../../components/Hobbies";
import Hobbie from "../../datas/Hobbie";
import HobbieEnglish from "../../datas/HobbieEnglish";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../context/LangContext";

export function About() {
  const navigate = useNavigate();
  const [french] = useContext(LangContext);

  return (
    <div>
      <div className="flex justify-between mb-36">
        {french ? (
          <>
            <Button onClick={() => navigate("/marc-lantol")}>Accueil</Button>
            <Button onClick={() => navigate("/contact")}>Contactez moi</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/marc-lantol")}>Home</Button>
            <Button onClick={() => navigate("/contact")}>Contact me</Button>
          </>
        )}
      </div>
      {french ? (
        <h2 className="text-3xl m-4 text-center">Compétences personnelles</h2>
      ) : (
        <h2 className="text-3xl m-4 text-center">Soft skills</h2>
      )}
      {french ? (
        <div className="flex gap-20 justify-center mb-10">
          {SoftSkill.map((skill) => (
            <SoftSkills skill={skill} key={skill.id} />
          ))}
        </div>
      ) : (
        <div className="flex gap-20 justify-center mb-10">
          {SoftSkillEnglish.map((skill) => (
            <SoftSkills skill={skill} key={skill.id} />
          ))}
        </div>
      )}
      {french ? (
        <h2 className="text-3xl m-4 text-center">Stack technique</h2>
      ) : (
        <h2 className="text-3xl m-4 text-center">Technical stack</h2>
      )}
      <div className="flex gap-20 justify-center mb-10">
        {HardSkill.map((skill) => (
          <HardSkills skill={skill} key={skill.id} />
        ))}
      </div>
      {french ? (
        <h2 className="text-3xl m-4 text-center">Passe-temps</h2>
      ) : (
        <h2 className="text-3xl m-4 text-center">Hobbies</h2>
      )}
      {french ? (
        <div className="flex gap-20 justify-center">
          {Hobbie.map((like) => (
            <Hobbies like={like} key={like.id} />
          ))}
        </div>
      ) : (
        <div className="flex gap-20 justify-center">
          {HobbieEnglish.map((like) => (
            <Hobbies like={like} key={like.id} />
          ))}
        </div>
      )}
    </div>
  );
}

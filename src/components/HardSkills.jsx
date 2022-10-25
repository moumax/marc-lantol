const HardSkills = ({ skill }) => {
  return (
    <div>
      <p className="text-1xl text-center mb-6">{skill.texte}</p>
      <img className="w-24" src={skill.image} alt={skill.image} />
    </div>
  );
};

export default HardSkills;

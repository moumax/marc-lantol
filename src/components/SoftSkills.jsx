const SoftSkills = ({ skill }) => {
  return (
    <div>
      <img className="w-24" src={skill.image} alt={skill.image} />
      <p className="text-1xl">{skill.texte}</p>
    </div>
  );
};

export default SoftSkills;

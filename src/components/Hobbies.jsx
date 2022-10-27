const Hobbies = ({ like }) => {
  return (
    <div>
      <p className="text-1xl text-center mb-6">{like.texte}</p>
      <img className="w-24" src={like.image} alt={like.image} />
    </div>
  );
};

export default Hobbies;

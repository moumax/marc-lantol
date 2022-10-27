const Hobbies = ({ like }) => {
  return (
    <div className="w-20 flex flex-col items-center">
      <p className="text-1xl text-center mb-6">{like.texte}</p>
      <img className="w-10" src={like.image} alt={like.image} />
    </div>
  );
};

export default Hobbies;

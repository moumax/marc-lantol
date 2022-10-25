import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <form className="text-2xl flex flex-col items-center">
        <label className="mb-4">Nom :</label>
        <input
          className="w-2/4 rounded-md h-12 pl-4"
          placeholder="Votre nom"
        ></input>
        <label className="mb-4">Prénom :</label>
        <input
          className="w-2/4 rounded-md h-12 pl-4"
          placeholder="Votre prénom"
        ></input>
        <label className="mb-4">Votre société :</label>
        <input
          className="w-2/4 rounded-md h-12 pl-4"
          placeholder="Votre société"
        ></input>
        <label className="mb-4">Adresse mail :</label>
        <input
          className="w-2/4 rounded-md h-12 pl-4"
          placeholder="Votre mail"
        ></input>
        <label className="mb-4">Numéro de téléphone :</label>
        <input
          className="w-2/4 rounded-md h-12 pl-4"
          placeholder="Numéro de téléphone"
        ></input>
        <label className="mb-4">Message :</label>
        <textarea
          className="w-2/4 rounded-md h-20 pl-4"
          placeholder="Votre message"
        ></textarea>
        <Button>Envoyer le formulaire</Button>
      </form>
      <Button onClick={() => navigate("/about")}>Skills</Button>
      <Button onClick={() => navigate("/projects")}>Mes projets</Button>
    </>
  );
}

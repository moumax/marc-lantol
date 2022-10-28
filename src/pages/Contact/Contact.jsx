import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../components/Button";

export function Contact() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mzbwjygp");
  if (state.succeeded) {
    return (
      <div>
        <p>Formulaire bien envoyé !</p>{" "}
        <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col w-96 items-center" onSubmit={handleSubmit}>
        <label for="full-name">Prénom, nom</label>
        <input
          className=" rounded-md pl-2"
          type="text"
          name="name"
          id="full-name"
          placeholder="Prénom, nom"
          required=""
        ></input>
        <label htmlFor="email">Adresse email</label>
        <input
          className=" rounded-md  pl-2"
          id="email"
          type="email"
          name="email"
          placeholder="toto@gmail.com"
        />
        <label for="telephone">Numéro de téléphone (Optionnel)</label>
        <input
          className=" rounded-md pl-2"
          type="telephone"
          name="telephone"
          id="telephone"
          placeholder="06 21 32 43 12"
        ></input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label for="message">Votre message</label>
        <textarea
          className=" rounded-md pl-2"
          id="message"
          name="message"
          placeholder="......."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </form>
      <Button onClick={() => navigate("/about")}>Skills</Button>
      <Button onClick={() => navigate("/projects")}>Mes projets</Button>
    </>
  );
}

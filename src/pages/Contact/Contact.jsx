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
    <div>
      <div className="flex justify-between mb-28">
        <Button onClick={() => navigate("/about")}>Skills</Button>
        <Button onClick={() => navigate("/projects")}>Mes projets</Button>
      </div>
      <form
        className="flex flex-col w-full items-center justify-center text-xl font-bold"
        onSubmit={handleSubmit}
      >
        <label className="m-3" for="full-name">
          Prénom, nom
        </label>
        <input
          className=" rounded-md pl-2 w-2/3"
          type="text"
          name="name"
          id="full-name"
          placeholder="Prénom, nom"
          required=""
        ></input>
        <label className="m-3" htmlFor="email">
          Adresse email
        </label>
        <input
          className=" rounded-md  pl-2 w-2/3"
          id="email"
          type="email"
          name="email"
          placeholder="toto@gmail.com"
        />
        <label className="m-3" for="telephone">
          Numéro de téléphone (Optionnel)
        </label>
        <input
          className=" rounded-md pl-2 w-2/3"
          type="telephone"
          name="telephone"
          id="telephone"
          placeholder="06 21 32 43 12"
        ></input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="m-3" for="message">
          Votre message
        </label>
        <textarea
          className=" rounded-md pl-2 w-2/3 mb-12"
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
    </div>
  );
}

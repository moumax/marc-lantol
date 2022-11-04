import { useForm, ValidationError } from "@formspree/react";
import Button from "../components/Button";

const ContactComponent = () => {
  const [state, handleSubmit] = useForm("mzbwjygp");

  return (
    <form
      className="flex flex-col w-full items-center justify-center text-xl font-bold"
      onSubmit={handleSubmit}
    >
      <label className="m-3" for="full-name">
        Prénom, nom
      </label>
      <input
        className=" rounded-md pl-2 w-2/3  bg-slate-200"
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
        className=" rounded-md  pl-2 w-2/3 bg-slate-200"
        id="email"
        type="email"
        name="email"
        placeholder="toto@gmail.com"
      />
      <label className="m-3" for="telephone">
        Numéro de téléphone (Optionnel)
      </label>
      <input
        className=" rounded-md pl-2 w-2/3 bg-slate-200"
        type="telephone"
        name="telephone"
        id="telephone"
        placeholder="06 21 32 43 12"
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label className="m-3" htmlFor="message">
        Votre message
      </label>
      <textarea
        className=" rounded-md pl-2 w-2/3 mb-12 bg-slate-200"
        id="message"
        name="message"
        placeholder="......."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Envoyer votre formulaire
      </Button>
    </form>
  );
};

export default ContactComponent;

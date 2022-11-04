import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../components/Button";
import { DarkContext } from "../../context/DarkContext";
import { LangContext } from "../../context/LangContext";

import ContactComponent from "../../components/ContactComponent";

export function Contact() {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mzbwjygp");
  const [dark] = useContext(DarkContext);
  const [french] = useContext(LangContext);
  if (state.succeeded) {
    return (
      <div>
        {french ? (
          <>
            <p>Formulaire bien envoyé !</p>
            <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
          </>
        ) : (
          <>
            <p>Form was well sent !</p>
            <Button onClick={() => navigate("/")}>Return to Home</Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between mb-28">
        {french ? (
          <>
            <Button onClick={() => navigate("/about")}>Compétences</Button>
            <Button onClick={() => navigate("/projects")}>Mes projets</Button>
          </>
        ) : (
          <>
            <Button onClick={() => navigate("/about")}>Skills</Button>
            <Button onClick={() => navigate("/projects")}>My projects</Button>
          </>
        )}
      </div>
      {!french ? (
        <form
          className="flex flex-col w-full items-center justify-center text-xl font-bold"
          onSubmit={handleSubmit}
        >
          <label className="m-3" for="full-name">
            Firstname, Lastname
          </label>
          <input
            className=" rounded-md pl-2 w-2/3  bg-slate-200"
            type="text"
            name="name"
            id="full-name"
            placeholder="Firstname, Lastname"
            required=""
          ></input>
          <label className="m-3" htmlFor="email">
            Email adress
          </label>
          <input
            className=" rounded-md  pl-2 w-2/3 bg-slate-200"
            id="email"
            type="email"
            name="email"
            placeholder="toto@gmail.com"
          />
          <label className="m-3" for="telephone">
            Phone number (Optional)
          </label>
          <input
            className=" rounded-md pl-2 w-2/3 bg-slate-200"
            type="telephone"
            name="telephone"
            id="telephone"
            placeholder="555 233 443"
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="m-3" for="message">
            Your message
          </label>
          <textarea
            className=" rounded-md pl-2 w-2/3 mb-12 bg-slate-200"
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
            Submit your form
          </Button>
        </form>
      ) : (
        <ContactComponent />
      )}
    </div>
  );
}

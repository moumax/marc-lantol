import React from "react";
import Button from "../../components/Button";

export function About() {
  const btnSub = () => {
    console.warn("Toto est petit");
  };
  return (
    <div>
      Page About
      <Button onClick={btnSub}>Titi</Button>
    </div>
  );
}

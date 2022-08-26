import React from "react";
import { Card } from "../components";
import { getHeroesByPublisher } from "../helpers";

export const Dc = () => {
  const heroes = getHeroesByPublisher("DC Comics");
  const render = () => {
    if (heroes.length === 0) return <h1>No hay información</h1>;
    return heroes.map((heroe) => <Card key={heroe.id} heroe={heroe} />);
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">{render()}</div>
    </>
  );
};

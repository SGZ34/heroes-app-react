import { getHeroesByPublisher } from "../helpers";
import { Card } from "../components";

export const Marvel = () => {
  const heroes = getHeroesByPublisher("Marvel Comics");
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

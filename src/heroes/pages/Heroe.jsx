import { useParams } from "react-router-dom";
import { getHeroesById } from "../helpers";
export const Heroe = () => {
  const { id } = useParams();

  const heroe = getHeroesById(id);
  const img = `/assets/heroes/${heroe.id}.jpg`;

  return (
    <div className="col-md-8 offset-2" style={{ width: "40vw" }}>
      <div className="card">
        <img
          src={img}
          className="img-fluid img-thumbnail animate__animated animate__pulse"
          alt="..."
          style={{ height: "500px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{heroe.superhero}</h5>
          <p className="card-text">
            <b>Alter ego: </b> {heroe.alter_ego}
          </p>
          <p className="card-text">
            <b>First appearance: </b> {heroe.first_appearance}
          </p>
          <p className="card-text">
            <b>characters: </b> {heroe.characters}
          </p>
        </div>
      </div>
    </div>
  );
};

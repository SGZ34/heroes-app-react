import { Link } from "react-router-dom";
import "animate.css";

export const Card = ({ heroe }) => {
  const img = `/assets/heroes/${heroe.id}.jpg`;

  return (
    <div
      className="col-md-4 mx-2 mt-2 animate__animated animate__fadeIn"
      style={{ width: "18rem" }}
    >
      <div className="card">
        <img src={img} className="card-img-top" alt="imagen de super heroe" />
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
          <Link to={`/heroe/${heroe.id}`} className="btn btn-primary">
            Ver super Heroe
          </Link>
        </div>
      </div>
    </div>
  );
};

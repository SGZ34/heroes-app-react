import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { getHeroeByName } from "../helpers";
import { useForm } from "../hooks";
import { Card } from "../components";
import { Alert } from "../components";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const validateQuery =
    q.length > 0 ? <></> : <Alert color="primary" texto="Busca algún heroe" />;

  const validateHeroe =
    heroes.length === 0 && q.length > 0 ? (
      <Alert color="danger" texto="No se ha encontrado un heroe" />
    ) : (
      <></>
    );

  const { searchText, handleInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <form className="card" onSubmit={handleSubmit}>
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                placeholder="Digite el heroe"
                onChange={handleInputChange}
                name="searchText"
              />
              <button type="submit" className="btn btn-primary mt-2">
                Buscar
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          {validateQuery}
          {validateHeroe}
          <div className="d-flex flex-wrap">
            {heroes.length > 0 && heroes.map((heroe) => <Card heroe={heroe} />)}
          </div>
        </div>
      </div>
    </>
  );
};

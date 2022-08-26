import { heroes } from "../data/data";
export const getHeroesById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

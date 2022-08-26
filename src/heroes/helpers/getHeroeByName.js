import { heroes } from "../data/data";
export const getHeroeByName = (name = "") => {
  name = name.toLowerCase().trim();

  if (name.length === 0) return [];
  return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(name));
};

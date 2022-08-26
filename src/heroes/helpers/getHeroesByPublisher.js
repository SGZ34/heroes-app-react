import { heroes } from "../data/data";
export const getHeroesByPublisher = (publisher = "Marvel Comics") => {
  return heroes.filter((heroe) => heroe.publisher.includes(publisher));
};

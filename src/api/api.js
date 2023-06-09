import axios from "axios";

export const loadCharacters = async (pageNumber) => {
  const response = (await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`));
  return response;
};


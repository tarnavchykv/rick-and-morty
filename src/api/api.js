import axios from "axios";

export const loadCharacters = async (pageNumber, searchText, filters) => {
  const status = filters.status ?? "";
  const gender = filters.gender ?? "";
  const species = filters.species ?? "";

  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchText}&status=${status}&gender=${gender}&species=${species}`
  );
  return response;
};

export const loadEpisode = async (episodeNumber) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/episode/${episodeNumber}`
  );
  return response;
};

export const loadSingleCharacter = async (link) => {
  const response = await axios.get(link);
  return response;
};


export const loadLocation = async (locationNumber) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/location/${locationNumber}`
  );
  return response;
}
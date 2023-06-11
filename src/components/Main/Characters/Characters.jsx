import { useEffect, useState } from "react";
import { loadCharacters } from "../../../api/api";
import CharacterCard from "./CharacterCard/CharacterCard";
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import "./Characters.css";
const Characters = () => {
  const [searchText, setTextSearch] = useState("");
  const [filters, setFilters] = useState({
    status: null,
    gender: null,
    species: null,
  });
  const [pages, setPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    loadCharacters(pageNumber, searchText, filters)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage("");
          setCharacters(response.data.results);
          setPages(response.data.info.pages);
        }
      })
      .catch((_) => {
        setPages(1);
        setCharacters([]);
        setErrorMessage("No data found");
      });
  }, [pageNumber, searchText, filters]);

  const cards = characters.map((character, index) => {
    return <CharacterCard props={character} key={index} />;
  });

  return (
    <>
      <div className="container">
        <div className="utils">
          <Search setTextSearch={setTextSearch} />
          <Filters filters={filters} setFilters={setFilters} />
        </div>
        {characters && !errorMessage && <div className="cards">{cards}</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>

      {pages && <Pagination pages={pages} setPageNumber={setPageNumber} />}
    </>
  );
};
export default Characters;

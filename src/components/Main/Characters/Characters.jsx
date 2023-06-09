import { useEffect, useState } from "react";
import { loadCharacters } from "../../../api/api";
import CharacterCard from "./CharacterCard/CharacterCard";
import Search from "./Search/Search";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import "./Characters.css";
const Characters = () => {
  const [info, setInfo] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    loadCharacters(pageNumber).then((response) => {
      setCharacters(response.data.results);
      setInfo(response.data.info);
    });
  }, [pageNumber]);
  const cards = characters.map((character, index) => {
    return <CharacterCard props={character} key={index} />;
  });
  return (
    <>
      <div className="container">
        <div className="utils">
          <Search />
          <Filters />
        </div>
        {characters && <div className="cards">{cards}</div>}
      </div>
      {info && <Pagination info={info} setPageNumber={setPageNumber}/>}
    </>
  );
};
export default Characters;

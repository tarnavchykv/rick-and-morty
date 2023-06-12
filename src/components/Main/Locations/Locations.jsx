import "./Locations.css";
import { useEffect, useState } from "react";
import { loadLocation, loadSingleCharacter } from "../../../api/api";
import Dropdown from "../../Dropdown/Dropdown";
import CharacterCard from "../Characters/CharacterCard/CharacterCard";

const Locations = () => {
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [episodeData, setEpisodeData] = useState();
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCharactersCards = async (characters) => {
    const charactersData = await Promise.all(
      characters.map(async (character) => {
        const res = await loadSingleCharacter(character);
        return await res.data;
      })
    );
    return charactersData;
  };

  useEffect(() => {
    setIsLoading(true);
    loadLocation(episodeNumber).then((response) => {
      console.log(response.data);
      setEpisodeData(response.data);
      getCharactersCards(response.data.residents).then((characters) => {
        setCharacters(characters);
        setIsLoading(false);
      });
    });
  }, [episodeNumber]);

  const handleCLick = (index) => {
    setOpen(false);
    setEpisodeNumber(index);
  };

  const characterCards = characters.map((character, index) => {
    return <CharacterCard props={character} key={index} />;
  });

  const options = [...Array(126).keys()].map((index) => {
    return (
      <li key={index} value={index + 1}>
        <button
          onClick={() => {
            handleCLick(index + 1);
          }}
        >
          Location - {index + 1}
        </button>
      </li>
    );
  });
  return (
    <div className="episodes">
      <div className="left-menu">
        {episodeData && (
          <div className="episode-info">
            <h4>{episodeData.name}</h4>
            <p>Type: {episodeData.type}</p>
            <p>Dimension: {episodeData.dimension}</p>
          </div>
        )}

        <Dropdown
          elements={options}
          currentElementNumber={episodeNumber}
          open={open}
          setOpen={setOpen}
          buttonName={"Location"}
        />
      </div>
      <div className="cards">{!isLoading && characterCards}</div>
    </div>
  );
};
export default Locations;

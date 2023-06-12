import { useEffect, useState } from "react";
import { loadEpisode, loadSingleCharacter } from "../../../api/api";
import "./Episodes.css";
import Dropdown from "../../Dropdown/Dropdown";
import CharacterCard from "../Characters/CharacterCard/CharacterCard";

const Episodes = () => {
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
    loadEpisode(episodeNumber).then((response) => {
      console.log(response.data);
      setEpisodeData(response.data);
      getCharactersCards(response.data.characters).then((characters) => {
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

  const options = [...Array(52).keys()].map((index) => {
    return (
      <li key={index} value={index + 1}>
        <button
          onClick={() => {
            handleCLick(index + 1);
          }}
        >
          Episode - {index + 1}
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
            <p>Season and episode: {episodeData.episode}</p>
            <p>Air date: {episodeData.air_date}</p>
          </div>
        )}

        <Dropdown
          elements={options}
          currentElementNumber={episodeNumber}
          open={open}
          setOpen={setOpen}
          buttonName={"Episode"}
        />
      </div>
      <div className="cards">{!isLoading && characterCards}</div>
    </div>
  );
};
export default Episodes;

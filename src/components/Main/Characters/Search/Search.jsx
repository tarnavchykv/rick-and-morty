import "./Search.css";

const Search = ({ setTextSearch }) => {
  const handleChange = (data) => {
    setTextSearch(data.target.value);
  };
  return (
    <>
      <div className="search__container">
        <input
          onChange={handleChange}
          className="search__input"
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default Search;

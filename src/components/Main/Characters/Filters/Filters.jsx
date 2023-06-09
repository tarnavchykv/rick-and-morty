import React from "react";
import "./Filters.css";

const FilterButton = ({ value, onClick, isActive }) => {
  const buttonClass = isActive ? "active" : "";

  return (
    <button className={buttonClass} onClick={onClick}>
      {value}
    </button>
  );
};

const Filters = ({ filters, setFilters }) => {

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="filters">
      <h4>Status</h4>
      <div>
        {["alive", "dead", "unknown"].map((status) => (
          <FilterButton
            key={status}
            value={status}
            onClick={() =>
              handleFilterChange(
                "status",
                filters.status === status ? null : status
              )
            }
            isActive={filters.status === status}
          />
        ))}
      </div>
      <h4>Gender</h4>
      <div>
        {["male", "female", "genderless", "unknown"].map((gender) => (
          <FilterButton
            key={gender}
            value={gender}
            onClick={() =>
              handleFilterChange(
                "gender",
                filters.gender === gender ? null : gender
              )
            }
            isActive={filters.gender === gender}
          />
        ))}
      </div>
      <h4>Species</h4>
      <div>
        {[
          "Human",
          "Alien",
          "Humanoid",
          "Poopybutthole",
          "Mythological",
          "Animal",
          "Robot",
          "Cronenberg",
          "Planet",
          "Disease",
          "Unknown",
        ].map((species) => (
          <FilterButton
            key={species}
            value={species}
            onClick={() =>
              handleFilterChange(
                "species",
                filters.species === species ? null : species
              )
            }
            isActive={filters.species === species}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;

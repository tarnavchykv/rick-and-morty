import "./CharacterCard.css";

const CharacterCard = ({ props }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={`flip-card-front ${props.status.toLowerCase()}`}>
          <img src={props.image} alt="Avatar" />
          <h2>{props.name}</h2>
          <span className={`ribbon ${props.status.toLowerCase()}`}>
            {props.status}
          </span>
        </div>
        <div className={`flip-card-back `}>
          <div className="content">
            <p>Name: {props.name}</p>
            <p>Last location: {props.location.name}</p>
            <p>Species: {props.species}</p>
            {props.type && <p>Type: {props.type}</p>}
            <p>Gender: {props.gender}</p>
            <p>Original location: {props.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;

import "./Dropdown.css";

const Dropdown = ({ elements, currentElementNumber, open, setOpen }) => {
  return (
    <>
      <div className="dropdown">
        <button id="main-btn"
          onClick={() => {
            setOpen(!open);
          }}
        >{`Episode - ${currentElementNumber}`}</button>
        {open ? <ul className="menu">{elements}</ul> : null}
      </div>
    </>
  );
};

export default Dropdown;

import "./Dropdown.css";

const Dropdown = ({ elements, currentElementNumber, open, setOpen, buttonName }) => {
  return (
    <>
      <div className="dropdown">
        <button id="main-btn"
          onClick={() => {
            setOpen(!open);
          }}
        >{`${buttonName} - ${currentElementNumber}`}</button>
        {open ? <ul className="menu">{elements}</ul> : null}
      </div>
    </>
  );
};

export default Dropdown;

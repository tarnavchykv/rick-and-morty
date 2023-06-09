import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ info, setPageNumber }) => {
  const handlePageChange = (newPageNumber) => {
    setPageNumber(++newPageNumber.selected);
  };
  return (
    <ReactPaginate
      className="paginate"
      pageCount={info.pages}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;

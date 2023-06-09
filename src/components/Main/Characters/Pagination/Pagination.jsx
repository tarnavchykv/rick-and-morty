import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pages, setPageNumber }) => {
  const handlePageChange = (newPageNumber) => {
    setPageNumber(++newPageNumber.selected);
  };
  return (
    <ReactPaginate
      className="paginate"
      pageCount={pages}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;

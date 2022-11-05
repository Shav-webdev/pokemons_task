import './styles.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
}) => {
  if (!pageCount) {
    return <div className={`pagination`} />;
  }

  return (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageLabelBuilder={(page: number): string =>
        page === pageCount && pageCount !== 1 ? 'Last' : `${page}`
      }
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={'pagination c-blue fw700'}
      pageClassName={'pagination-link'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;

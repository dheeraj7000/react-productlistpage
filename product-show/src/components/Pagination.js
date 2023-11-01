import React from "react";


const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button 
        key={i}
        onClick={() => onPageChange(i)}
        className={i === currentPage ? 'active' : ''}
      >
        {i}  
      </button>
    );
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === 1}>
        Previous
      </button>
      
      {pageNumbers}

      <button disabled={currentPage === totalPages}>  
        Next
      </button>
    </div>
  );

}

export default Pagination;

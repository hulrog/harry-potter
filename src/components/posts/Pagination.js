import classes from "./Pagination.module.css";

function Pagination({ postsPerPage, totalPosts, currentPage, paginate }) {
  // Racuna broj stranica i generise niz brojeva
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Za svaki broj generise dugme koje kada se klikne aktivira funkciju
  // paginate sa tim brojem kao argumentom i postavlja tom dugmetu klasu "active"
  return (
    <div className={classes.paginationContainer}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? classes.active : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

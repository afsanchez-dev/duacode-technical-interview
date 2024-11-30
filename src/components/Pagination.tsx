interface PaginationProps {
  currPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  currPage,
  totalPages,
  setPage,
}) => {
  const calcPages = (): number[] => {
    const firstPage = 1;
    const prevPage = currPage - 1;
    const nextPage = currPage + 1;
    const lastPage = totalPages;

    const caclPrev = prevPage > firstPage ? prevPage : -1;
    const calcCurr =
      currPage > firstPage && currPage < lastPage ? currPage : -1;
    const calcNext = nextPage < totalPages ? nextPage : -1;

    const pages = [firstPage, caclPrev, calcCurr, calcNext, lastPage];

    return pages.filter((page) => page !== -1);
  };

  return (
    <nav aria-label="User list page navigation">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            onClick={() => setPage(currPage - 1)}
            disabled={currPage === 1}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Previous page"
          >
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {calcPages().map((pageNumber) => {
          return (
            <li>
              <button
                onClick={() => setPage(pageNumber)}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                aria-label={"Page " + pageNumber}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={() => setPage(currPage + 1)}
            disabled={currPage === totalPages}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="Next page"
          >
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

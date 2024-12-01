import { useBreakpoint } from "@appHooks/useBreakpoint";

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
  const currBreakpoint = useBreakpoint();

  const calcPages = (): number[] => {
    const firstPage = 1;
    const prevPage = currPage - 1;
    const nextPage = currPage + 1;
    const lastPage = totalPages;

    const calcPrev = prevPage > firstPage ? prevPage : -1;
    const calcCurr =
      currPage > firstPage && currPage < lastPage ? currPage : -1;
    const calcNext = nextPage < totalPages ? nextPage : -1;

    const prevElipsisPage = prevPage - firstPage > 1 ? -2 : -1;
    const nextElipsisPage = lastPage - nextPage > 1 ? -2 : -1;

    let pages: number[] = [];

    if (currBreakpoint === "default") {
      pages = [currPage];
    } else if (currBreakpoint === "sm") {
      pages = [firstPage, prevElipsisPage, calcCurr, nextElipsisPage, lastPage];
    } else {
      pages = [
        firstPage,
        prevElipsisPage,
        calcPrev,
        calcCurr,
        calcNext,
        nextElipsisPage,
        lastPage,
      ];
    }

    return pages.filter((page) => page !== -1);
  };

  return (
    <nav aria-label="User list page navigation">
      <ul className="inline-flex -space-x-px text-sm md:text-base h-10">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {calcPages().map((pageNumber, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setPage(pageNumber)}
                disabled={pageNumber === -2}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  currPage === pageNumber ? "bg-gray-500" : "bg-gray-800"
                } border border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white`}
                aria-label={"Page " + pageNumber}
              >
                {pageNumber !== -2 ? pageNumber : "..."}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

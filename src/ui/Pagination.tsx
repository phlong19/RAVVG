import { useSearchParams } from "react-router-dom";
import { ITEM_PER_PAGE } from "../utils/variables";
import PaginationButton from "./PaginationButton";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

// const totalItems = 288;
// const totalPages = 14;

function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const totalPages = Math.ceil(count / ITEM_PER_PAGE);
  let finalDestination: number;

  function handlePagination(to: string) {
    switch (to) {
      case "first":
        finalDestination = 1;
        break;
      case "prev2":
        finalDestination = currentPage < 3 ? currentPage : currentPage - 2;
        break;
      case "prev":
        finalDestination = currentPage === 1 ? currentPage : currentPage - 1;
        break;
      case "next":
        finalDestination =
          currentPage === totalPages ? currentPage : currentPage + 1;
        break;
      case "next2":
        finalDestination =
          currentPage > totalPages - 3 ? currentPage : currentPage + 2;
        break;
      case "last":
        finalDestination = totalPages;
        break;
      default:
        break;
    }
    searchParams.set("page", finalDestination.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-1 flex justify-center gap-2 px-3 py-4 lg:justify-end">
      <PaginationButton
        type="icon"
        disabled={currentPage < 2}
        onClick={() => handlePagination("prev")}
      >
        <span>
          <FaAngleDoubleLeft />
        </span>
        Previous
      </PaginationButton>

      {currentPage > 2 && (
        <PaginationButton onClick={() => handlePagination("first")}>
          1
        </PaginationButton>
      )}
      {currentPage > 4 && <span className="pt-2">...</span>}
      {currentPage > 3 && (
        <PaginationButton onClick={() => handlePagination("prev2")}>
          {currentPage - 2}
        </PaginationButton>
      )}
      {currentPage > 1 && (
        <PaginationButton onClick={() => handlePagination("prev")}>
          {currentPage - 1}
        </PaginationButton>
      )}
      <PaginationButton disabled={true} type="active">
        {currentPage}
      </PaginationButton>
      {currentPage !== totalPages && (
        <PaginationButton onClick={() => handlePagination("next")}>
          {currentPage + 1}
        </PaginationButton>
      )}
      {currentPage < totalPages - 3 && (
        <PaginationButton onClick={() => handlePagination("next2")}>
          {currentPage + 2}
        </PaginationButton>
      )}
      {currentPage < totalPages - 5 && <span className="pt-2">...</span>}
      {currentPage < totalPages - 1 && (
        <PaginationButton onClick={() => handlePagination("last")}>
          {totalPages}
        </PaginationButton>
      )}
      <PaginationButton
        type="icon"
        disabled={currentPage === totalPages}
        onClick={() => handlePagination("next")}
      >
        Next
        <span>
          <FaAngleDoubleRight />
        </span>
      </PaginationButton>
    </div>
  );
}

export default Pagination;

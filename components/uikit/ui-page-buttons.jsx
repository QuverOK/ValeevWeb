import clsx from "clsx";
import { ArrowIcon } from "../Overview/ui/icons/arrow-icon";

function checkIsButtonActive(pageNumber, currentPage) {
  return currentPage == pageNumber
    ? "text-[#7F56D9] bg-[#F9F5FF] rounded-sm"
    : "";
}

function checkPage(potentialPage, maxPages, handlePageChange) {
  if (potentialPage > maxPages || potentialPage <= 0) return;

  return handlePageChange(potentialPage);
}

export function UiPageButtons({ currentPage, handlePageChange, maxPages }) {
  return (
    <div className="mt-30 pt-[20.5px] border-t border-[#EAECF0] flex justify-between items-center">
      <div>
        <button
          onClick={() => checkPage(currentPage - 1, maxPages, handlePageChange)}
          className="text-[#667085] flex items-center"
        >
          <ArrowIcon className="mr-2" rotation={0} size={20} />
          <span className="text-sm font-medium">Предыдующий</span>
        </button>
      </div>
      <div>
        <div className="flex">
          {Array.from({ length: maxPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={clsx(
                  "w-10 h-10 flex items-center justify-center font-medium text-sm text-[#667085]",
                  checkIsButtonActive(pageNumber, currentPage),
                )}
              >
                {pageNumber}
              </button>
            ),
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => checkPage(currentPage + 1, maxPages, handlePageChange)}
          className="text-[#667085] flex items-center"
        >
          <span className="text-sm font-medium">Следующий</span>
          <ArrowIcon className="ml-2" rotation={180} size={20} />
        </button>
      </div>
    </div>
  );
}

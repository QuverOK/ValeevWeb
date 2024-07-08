"use client";

import { OverviewTextTitle } from "./overview-text-title";
import { UiPageButtons } from "../../uikit/ui-page-buttons";
import { useCurrentPageItems } from "../../../hooks/ui/use-current-page-items";
import { OverviewPost } from "./overview-post";

export function OverviewProjects({ items }) {
  const itemsPerPage = 6;

  const [{ currentPage, currentPageItems, maxPages }, setCurrentPage] =
    useCurrentPageItems({
      items,
      itemsPerPage,
    });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <article className="mt-[60px]">
      <div className="container flex flex-col gap-8 h-full">
        <OverviewTextTitle>Проекты</OverviewTextTitle>
        <ul className="grid-container gap-y-[48px] grid-rows-2 min-h-[929px]">
          {currentPageItems.map((project) => (
            <li key={project.id} className="col-span-4">
              <OverviewPost
                layoutClasses="flex flex-col h-full justify-between gap-7"
                author={project.author}
                categories={project.categories}
                date={project.date}
                description={project.description}
                maxDescriptionLength={10}
                isArrow={true}
                picture={project.image}
                title={project.name}
              />
            </li>
          ))}
        </ul>
        <UiPageButtons
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          maxPages={maxPages}
        />
      </div>
    </article>
  );
}

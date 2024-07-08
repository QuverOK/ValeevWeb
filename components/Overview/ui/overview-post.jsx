import { ArrowIcon } from "./icons/arrow-icon";
import { cutText } from "../../../helpers/ui/cut-text";
import { OverviewCategories } from "./overview-categories";
import Image from "next/image";

/**
 *
 * @param {{
 * picture: string,
 * author: string,
 * date: string,
 * title: string,
 * description: string,
 * maxDescriptionLength: number,
 * categories: object,
 * isArrow: boolean,
 * layoutClasses: (className: string) => string
 * }} props
 * @returns
 */

export function OverviewPost({
  picture,
  author,
  date,
  title,
  description,
  maxDescriptionLength,
  categories,
  isArrow,
  layoutClasses: className,
}) {
  description = cutText(description, maxDescriptionLength);
  const arrow = isArrow && (
    <ArrowIcon className="text-[#1A1A1A]" rotation={135} size={24} />
  );

  return (
    <article className={className}>
      <div className="flex-[50%] w-full h-full">
        <Image
          className="h-full"
          alt={description}
          src={picture}
          aria-hidden="true"
          width={592}
          height={228}
        />
      </div>
      <div className="flex-[50%] flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="line-clamp-4 font-semibold text-[#6941C6]">
            {author} • {date}
          </p>
          <a href="#" className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{title}</h3>
            {arrow}
          </a>
          <p className="text-base text-[rgb(var(--description))]">
            {description}
          </p>
        </div>
        <OverviewCategories categories={categories} />
      </div>
    </article>
  );
}

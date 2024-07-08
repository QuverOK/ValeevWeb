import clsx from "clsx";
import { OverviewTextTitle } from "./overview-text-title";
import { OverviewPost } from "./overview-post";

export function OverviewBlogRecent({ className, posts }) {
  let post1 = posts[posts.length - 1];
  let post2 = posts[posts.length - 2];
  let post3 = posts[posts.length - 3];
  let post4 = posts[posts.length - 4];

  return (
    <article className={clsx("mt-[60px]", className)}>
      <div className="container flex flex-col gap-8">
        <OverviewTextTitle>Недавние записи</OverviewTextTitle>
        <div>
          <ul className="grid-container gap-y-6">
            <li className="col-span-6 row-span-2 ">
              <OverviewPost
                layoutClasses="flex flex-col gap-8"
                picture={post1.image}
                author={post1.author}
                categories={post1.categories}
                date={post1.date}
                description={post1.description}
                maxDescriptionLength={30}
                title={post1.name}
                isArrow={true}
              />
            </li>
            <li className="col-span-6">
              <OverviewPost
                layoutClasses="flex gap-6 items-center"
                picture={post2.image}
                author={post2.author}
                categories={post2.categories}
                date={post2.date}
                description={post2.description}
                maxDescriptionLength={20}
                title={post2.name}
              />
            </li>
            <li className="col-span-6">
              <OverviewPost
                layoutClasses="flex gap-6 items-center"
                picture={post3.image}
                author={post3.author}
                categories={post3.categories}
                date={post3.date}
                description={post3.description}
                maxDescriptionLength={20}
                title={post3.name}
              />
            </li>
          </ul>
          <div className="col-span-12 ">
            <OverviewPost
              layoutClasses="flex mt-[60px] gap-8 items-center"
              picture={post4.image}
              author={post4.author}
              categories={post4.categories}
              date={post4.date}
              description={post4.description}
              maxDescriptionLength={44}
              title={post4.name}
              isArrow={true}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

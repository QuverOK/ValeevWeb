import { OverviewProjects } from "./ui/overview-projects"
import { OverviewBlogRecent } from "./ui/overview-blog-recent"
import { OverviewIconTitle } from "./ui/overview-icon-title"
import { BLOG_POSTS, PROJECTS } from "../../helpers/logic/variables"
import { OverviewIcon } from "./ui/icons/overview-icon"

export function Overview() {
  return (
    <>
      <OverviewIconTitle icon={<OverviewIcon />} />
      <OverviewBlogRecent posts={BLOG_POSTS} />
      <OverviewProjects items={PROJECTS} />
    </>
  )
}

import { postId, postTypeId, userId } from "@/kernel/ids";

export type Post = {
  id: postId;
  name: string;
  description: string;
  creationDate: Date;
  githubLink: string;
  postTypeId: postTypeId;
  userId: userId;
};

export const Posts: Post[] = [
  {
    id: "1",
    name: "TODOAPP",
    description:
      "В этом проекте я попрактиковал и впервые использовал RTK, RTK Query, а также перенес проект полностью на TypeScript",
    creationDate: new Date("2024-06-24"),
    githubLink: "https://github.com/QuverOK/todoapp-rtk",
    postTypeId: "1",
    userId: "1",
  },
  {
    id: "2",
    name: "Danila Valeev",
    description:
      "В этом проекте я попрактиковал и впервые использовал RTK, RTK Query, а также перенес проект полностью на TypeScript",
    creationDate: new Date("2024-06-24"),
    githubLink: "https://github.com/QuverOK/ValeevWeb",
    postTypeId: "1",
    userId: "1",
  },
];

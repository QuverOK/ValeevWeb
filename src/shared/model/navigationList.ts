export type NavigationItem = {
  id: string;
  title: string;
  route: string;
};

export const navigationList: NavigationItem[] = [
  {
    id: "1",
    title: "Главная",
    route: "/",
  },
  {
    id: "2",
    title: "Блог",
    route: "/blog",
  },
  {
    id: "3",
    title: "Проекты",
    route: "/projects",
  },
  {
    id: "4",
    title: "Обо мне",
    route: "/about",
  },
  {
    id: "5",
    title: "Рассылка",
    route: "/newsLetter",
  },
];

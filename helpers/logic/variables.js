import image0 from "/public/images/overview/01.png";
import image1 from "/public/images/overview/02.png";
import image2 from "/public/images/overview/03.png";
import image3 from "/public/images/overview/04.png";

export const FOOTER_LINKS = [
  {
    id: "0",
    title: "Telegram",
    link: "/",
    icon: "fab fa-telegram",
  },
  {
    id: "1",
    title: "Github",
    link: "/",
    icon: "fab fa-github",
  },
  {
    id: "2",
    title: "Instagram",
    link: "/",
    icon: "fab fa-instagram",
  },
  {
    id: "3",
    title: "LinkedIn",
    link: "/",
    icon: "fab fa-linkedin",
  },
  {
    id: "4",
    title: "Email",
    link: "/",
    icon: "fas fa-envelope",
  },
];

export const BLOG_CATEGORIES = [
  {
    id: 0,
    name: "Design",
    textColor: "#6941C6",
    bgColor: "#F9F5FF",
  },
  {
    id: 1,
    name: "Research",
    textColor: "#3538CD",
    bgColor: "#EEF4FF",
  },
  {
    id: 2,
    name: "Presentation",
    textColor: "#C11574",
    bgColor: "#FDF2FA",
  },
  {
    id: 3,
    name: "Interface",
    textColor: "#026AA2",
    bgColor: "#F0F9FF",
  },
];

export const BLOG_POSTS = [
  {
    id: 0,
    name: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image3,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Interface",
    ),
  },

  {
    id: 1,
    name: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    author: "Phoenix Baker",
    date: "01.11.2023",
    image: image2,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Research",
    ),
  },
  {
    id: 2,
    name: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manage all your blabla...",
    author: "Phoenix Baker",
    date: "01.11.2023",
    image: image1,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Research",
    ),
  },
  {
    id: 3,
    name: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image0,
    categories: BLOG_CATEGORIES.filter(
      (category) =>
        category.name === "Design" ||
        category.name === "Research" ||
        category.name === "Presentation",
    ),
  },
];

export const PROJECTS = [
  {
    id: 0,
    name: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image3,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Interface",
    ),
  },

  {
    id: 1,
    name: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    author: "Phoenix Baker",
    date: "01.11.2023",
    image: image2,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Research",
    ),
  },
  {
    id: 2,
    name: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    author: "Phoenix Baker",
    date: "01.11.2023",
    image: image1,
    categories: BLOG_CATEGORIES.filter(
      (category) => category.name === "Design" || category.name === "Research",
    ),
  },
  {
    id: 3,
    name: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image0,
    categories: BLOG_CATEGORIES.filter(
      (category) =>
        category.name === "Design" ||
        category.name === "Research" ||
        category.name === "Presentation",
    ),
  },
  {
    id: 4,
    name: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image0,
    categories: BLOG_CATEGORIES.filter(
      (category) =>
        category.name === "Design" ||
        category.name === "Research" ||
        category.name === "Presentation",
    ),
  },
  {
    id: 5,
    name: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image0,
    categories: BLOG_CATEGORIES.filter(
      (category) =>
        category.name === "Design" ||
        category.name === "Research" ||
        category.name === "Presentation",
    ),
  },
  {
    id: 6,
    name: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "01.11.2023",
    image: image0,
    categories: BLOG_CATEGORIES.filter(
      (category) =>
        category.name === "Design" ||
        category.name === "Research" ||
        category.name === "Presentation",
    ),
  },
];

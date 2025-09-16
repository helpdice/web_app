import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Content",
    newTab: false,
    submenu: [
      {
        id: 2.1,
        title: "Article",
        newTab: false,
        path: "/articles"
      },
      {
        id: 2.2,
        title: "MCQ",
        newTab: false,
        path: "/mcqs"
      },
      {
        id: 2.3,
        title: "Question Answer",
        newTab: false,
        path: "/qnas"
      },
    ]
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Logo Designing",
        newTab: false,
        path: "/services/logo-designing"
      },
      {
        id: 3.2,
        title: "UI / UX Designing",
        newTab: false,
        path: "/services/ux-designing",
      },
      {
        id: 3.3,
        title: "APP Development",
        newTab: false,
        path: "/services/app-development",
      },
      {
        id: 3.4,
        title: "Digital Marketing",
        newTab: false,
        path: "/services/digital-marketing",
      },
      {
        id: 3.5,
        title: "SEO",
        newTab: false,
        path: "/services/search-engine-optimization",
      }
    ],
  },
  {
    id: 4,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 4.1,
        title: "Helpdice Business",
        newTab: false,
        path: "https://business.helpdice.com",
      },
      {
        id: 4.2,
        title: "Helpdice UI",
        newTab: false,
        path: "https://ui.helpdice.com",
      }
    ]
  }
];

export default menuData;

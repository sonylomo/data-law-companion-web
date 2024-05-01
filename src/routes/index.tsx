import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";
import Compliance from "../pages/compliance/Compliance";
// import News from "../pages/news/News";
import CaseStudies from "../pages/caseStudies/CaseStudies";
// import Blog from '../pages/news/sections/Blog';
import BlogPost from "../pages/resources/Blog";
import OnePost from "../components/resources/singlePost";
import Guidelines from '../pages/resources/Guidelines';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/compliance-issues",
        element: <Compliance />,
      },
      // {
      //   path: "/news",
      //   element: <News />,
      // },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/case-studies/:slug",
        element: <OnePost />,
      },
      {
        path: "/resources/blog",
        element: <BlogPost />,
      },
      {
        path: "/resources/blog/:slug",
        element: <OnePost />,
      },
      {
        path: "/resources/guidelines",
        element: <Guidelines />,
      },
    ],
  },
]);

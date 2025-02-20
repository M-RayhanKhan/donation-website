import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Home from "../components/Home/Home/Home";
import Pages from "../pages/Pages";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import News from "../pages/News";
import Layout2 from "../components/Layout2/Layout2";
import Home2 from "../components/Home2/Home2";

import Donations from "../Pages2/Donations";
import Page2 from "../Pages2/Page2";
import Blog2 from "../Pages2/Blog2";
import ContactUs from "../Pages2/ContactUs";
import AboutUs2 from "../Pages2/AboutUs/AboutUs2";
import { Navigation } from "swiper/modules";
import DonateDetails from "../components/Home2/Home2Component/DonateDetails/DonateDetails";
import { param } from "motion/react-client";
import EventPage from "../components/Home2/Home2Component/EvenPageContainer/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // Home 2
  {
    path: "/home2",
    element: <Layout2 />,
    children: [
      {
        index: true,
        element: <Navigate to="/home2/home" />,
      },
      {
        path: "/home2/home",
        element: <Home2 />,
      },
      {
        path: "aboutUs2",
        element: <AboutUs2 />,
      },
      {
        path: "donations",
        element: <Donations />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "blog2",
        element: <Blog2 />,
      },
      {
        path: "contact2",
        element: <ContactUs />,
      },
      {
        path: "donateDetails/:id",
        element: <DonateDetails />,
        loader: async ({ params }) => {
          const detailsData = await fetch("/donate.json");
          const donateData = await detailsData.json();
          const data = donateData.find((donate) => donate.id == params.id);
          return data;
        },
      },
      {
        path: 'eventPage',
        element: <EventPage/>
      }
    ],
  },
]);

export default router;

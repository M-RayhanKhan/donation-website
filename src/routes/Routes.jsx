import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Home from "../components/Home/Home/Home";
import Pages from "../pages/Pages";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import News from "../pages/News";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <NotFoundPage/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/pages',
            element: <Pages/>
        },
        {
            path: '/services',
            element: <Service/>
        },
        {
            path: '/portfolio',
            element: <Portfolio/>
        },
        {
            path: '/news',
            element: <News/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
      ]
    },
  ]);

  export default router
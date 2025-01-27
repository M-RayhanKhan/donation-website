import { createBrowserRouter } from "react-router-dom";
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
    // Home 2
    {
        path: "/home2",
        element: <Layout2/>,
        children: [
            {
                index: true,
                element: <Home2/>
            }
        ]
    }
  ]);

  export default router
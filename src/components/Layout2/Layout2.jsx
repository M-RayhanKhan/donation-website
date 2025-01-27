import { Outlet } from "react-router-dom";
import Home2 from "../Home2/Home2";
import Navbar2 from "./Navbar2";

import Footer2 from "./Footer2";

const Layout2 = () => {
    return (
        <div>
            <Navbar2/>
            <Outlet/>
            <Footer2/>
        </div>
    );
};

export default Layout2;
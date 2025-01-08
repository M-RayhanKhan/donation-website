// import Banner from "./Banner/Banner";
import Donate from "../../DonateContainer/Donate";
import Banner from "./Banner/Banner";
import Helping from "./Helping/Helping";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Helping/>
           <Donate/>
        </div>
    );
};

export default Home;
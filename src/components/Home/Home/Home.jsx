// import Banner from "./Banner/Banner";
import Donate from "../../DonateContainer/Donate";
import Banner from "./Banner/Banner";
import ChildrenTrouble from "./ChildrenTrouble/ChildrenTrouble";
import Helping from "./Helping/Helping";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Helping/>
           <Donate/>
           <ChildrenTrouble/>
        </div>
    );
};

export default Home;
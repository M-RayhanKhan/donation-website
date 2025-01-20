// import Banner from "./Banner/Banner";

import Donate from "../../DonateContainer/Donate";
import Banner from "./Banner/Banner";
import ChildrenTrouble from "./ChildrenTrouble/ChildrenTrouble";
import AccordionSection from "./Faq/AccordionSection";
import HeartCare from "./HeartCare/HeartCare";


import Helping from "./Helping/Helping";
import RealLifeCase from "./RealLifeCase/RealLifeCase";
import ReviewSection from "./ReviewSection/ReviewSection";
import SuperClient from "./SuperClient/SuperClient";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Helping/>
           <Donate/>
           <ChildrenTrouble/>
           <SuperClient/>
           <AccordionSection/>
           <HeartCare/>
           <ReviewSection/>
           <RealLifeCase/>
        </div>
    );
};

export default Home;
import Banner2 from "./Home2Component/Banner2/Banner2";
import Charity from "./Home2Component/Charity/Charity";
import CustomerFeedback from "./Home2Component/Customer/CustomerFeedback";
import Donate2 from "./Home2Component/Donate2/Donate2";
import Feedback from "./Home2Component/Feedback/Feedback";
import JoinTheCommunity from "./Home2Component/JoinTheCommunity/JoinTheCommunity";
import OldPeople from "./Home2Component/OldPeople/OldPeople";
import OurMission from "./Home2Component/OurMission/OurMission";
import PoorPeople from "./Home2Component/PoorPeople/PoorPeople";
import SuperClient2 from "./Home2Component/SupperClient2";
import SupportUs from "./Home2Component/SupportUs/SupportUs";


const Home2 = () => {
    return (
        <div>
            <Banner2/>
            <Charity/>
            <PoorPeople/>
            <Donate2/>
            <SupportUs/>
            <SuperClient2/>
            <JoinTheCommunity/>
            <Feedback/>
            <OldPeople/>
            <OurMission/>
            <CustomerFeedback/>
        </div>
    );
};

export default Home2;
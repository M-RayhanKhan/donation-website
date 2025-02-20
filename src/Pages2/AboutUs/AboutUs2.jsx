import React, { useContext } from "react";
import GlobalSection from "../../components/Home2/Home2Component/GlobalSection/GlobalSection";
import PoorPeople from "../../components/Home2/Home2Component/PoorPeople/PoorPeople";
import SuperClient2 from "../../components/Home2/Home2Component/SupperClient2";
import Feedback from "../../components/Home2/Home2Component/Feedback/Feedback";
import AccordionSection from "../../components/Home/Home/Faq/AccordionSection";
import MessageSend from "./MessageSend";
import OurMission from "../../components/Home2/Home2Component/OurMission/OurMission";
import MarqueeSection from "../../components/Home/Home/Marquee.jsx /MarqueeSection";
import { Helmet } from "react-helmet-async";

const AboutUs2 = () => {
  // const { donate } = useContext(DonateContaxt);
  return (
    <section>
           <Helmet>
              <title>Donate | About Us </title>
            </Helmet>
      <GlobalSection title="About Us" />
      {/* poor people image */}
      <div>
        <PoorPeople />
      </div>
      {/* superclient2 section */}
      <SuperClient2 />
      {/* accordion section */}
      <AccordionSection />
      {/* feedback section*/}
      <Feedback />
      {/* send message section */}
      <MessageSend />
      {/* misstion section */}
      <div className="my-16">
        <OurMission />
      </div>
      {/* merquee section*/}
      <MarqueeSection/>
    </section>
  );
};

export default AboutUs2;

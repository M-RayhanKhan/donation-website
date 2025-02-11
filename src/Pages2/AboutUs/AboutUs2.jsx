import React, { useContext } from "react";
import GlobalSection from "../../components/Home2/Home2Component/GlobalSection/GlobalSection";
import PoorPeople from "../../components/Home2/Home2Component/PoorPeople/PoorPeople";
import SuperClient2 from "../../components/Home2/Home2Component/SupperClient2";
import Feedback from "../../components/Home2/Home2Component/Feedback/Feedback";
import AccordionSection from "../../components/Home/Home/Faq/AccordionSection";
import MessageSend from "./MessageSend";

const AboutUs2 = () => {
  // const { donate } = useContext(DonateContaxt);
  return (
    <section>
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
      {/* send message seciton */}
      <MessageSend/>
    </section>
  );
};

export default AboutUs2;

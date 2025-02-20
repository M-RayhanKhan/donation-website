import { useContext } from "react";
import { DonateContaxt } from "../components/DonateContainer/DonateContainer";
import GlobalSection from "../components/Home2/Home2Component/GlobalSection/GlobalSection";
import TitlePage from "../components/TitlePage/TitlePage";
import Container from "../components/Container";
import DonateCard from "../components/DonateContainer/DonateCard";
import Donate2 from "../components/Home2/Home2Component/Donate2/Donate2";
import HelpPeople from "../components/Home/Home/HelpPeople/HelpPeople";
import MessageSend from "./AboutUs/MessageSend";
import { Helmet } from "react-helmet-async";


const Donations = () => {
  const { donate } = useContext(DonateContaxt);
  return (
    <section>
      <Helmet>
        <title>Donate | Donations</title>
      </Helmet>
      <GlobalSection title="Our Causes" />
      {/* title pages */}
      <div className="mt-10 mb-5">
        <TitlePage />
      </div>
      {/* donate card */}
      <Container className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {donate.map((card) => (
          <DonateCard items={card} key={card.id}></DonateCard>
        ))}
      </Container>
      {/* help people, help children */}
      <div className="my-10">
        <HelpPeople />
      </div>
      {/* Donate2  */}
      <Donate2 />
      {/* send message section */}
      <MessageSend />
    </section>
  );
};

export default Donations;

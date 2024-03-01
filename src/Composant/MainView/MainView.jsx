import React from "react";
import AboutView from "./AboutView/AboutView";
import FactsView from "./FactsView/FactsView";
import SkillView from "./SkillView/SkillView";
import ResumeView from "./ResumeView/ResumeView";
import NewPortfolio from "./NewPortfolio/NewPortfolio";
import ServicesView from "./ServicesView/ServicesView";
import TestimonialsView from "./TestimonialsView/TestimonialsView";
import ContactView from "./ContactView/ContactView";

const MainView = () => {
  return (
    <main id="main">
      <AboutView />
      <FactsView />
      <SkillView />
      <ResumeView />
      <NewPortfolio />
      <ServicesView />
      <TestimonialsView />
      <ContactView />
    </main>
  );
};

export default MainView;

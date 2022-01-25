import React from "react";
import Hero from "./Hero";
import Social from "./Social";
import Community from "./Community";
import Collection from "./Collection";
import Faq from "./Faqs";
import Roadmap from "./RoadMap";
import Headquarters from "./Headquarters";
import Project from "./Project";
import Veterans from "./Veterans";
import Bonus from "./Bonus";
import CalltoAction from "./CalltoAction";

function Home() {
  return (
    <>
      <Hero />
      <Social />
      <Project />
      <Collection />
      <Community />
      <Bonus />
      <Roadmap />
      <Headquarters />
      <Veterans />
      <Faq />
      <CalltoAction />
    </>
  );
}

export default Home;

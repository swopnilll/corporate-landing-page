import Hero from "@/components/hero";
import React from "react";

import homeImg from "/public/images/home.jpg";

const Home = () => {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="Home Image"
      title="Professional Cloud Hosting"
    />
  );
};

export default Home;

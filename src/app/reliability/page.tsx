import Hero from "@/components/hero";
import React from "react";

import reliabilityImg from "/public/images/reliability.jpg";

const Reliability = () => {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="Reliability Image"
      title="Super high reliability hosting"
    />
  );
};

export default Reliability;

import Hero from "@/components/hero";
import React from "react";

import performanceImg from "/public/images/performance.jpg";

const Performance = () => {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="Performance Image"
      title="We serve high performance application"
    />
  );
};

export default Performance;

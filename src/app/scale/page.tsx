import Hero from "@/components/hero";
import React from "react";

import scaleImg from "/public/images/scale.jpg";

const Scale = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Scale Image"
      title="Scale your app to infinity"
    />
  );
};

export default Scale;

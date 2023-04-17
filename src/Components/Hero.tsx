import React from "react";
import CTA from "./CTA";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-6xl font-bold text-white">
          Welcome to the No Wait Restaurant
        </h1>
        <p className="text-xl mt-8 text-gray-300 max-w-2xl text-center">
          No more waiting in lines or for tables. Experience fine dining with
          no reservations needed.
        </p>
<CTA/>
      </section>
    </div>

  );
};

export default Hero;

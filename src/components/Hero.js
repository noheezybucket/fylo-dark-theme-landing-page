import React from "react";
import hero from "../assets/illustration-intro.png";

const Hero = () => {
  return (
    <section className="text-white mx-auto bg-curvyDesktop bg-contain bg-no-repeat bg-bottom pb-32">
      <div className="w-[90%] mx-auto">
        <div className="mx-auto max-w-[550px]">
          <img src={hero} alt="Hero" className="w-full" />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold font-headings text-center w-full md:w-[50%] mx-auto my-10">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className=" w-full text-sm sm:text-lg sm:w-[40%] mx-auto text-center">
          {" "}
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="w-full my-10 flex justify-center">
          <button className="bg-gradient-to-r from-callto1 to-callto2 py-3 px-10 rounded-[2em] ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

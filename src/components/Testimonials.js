import React from "react";
import person1 from "../assets/profile-1.jpg";
import person2 from "../assets/profile-2.jpg";
import person3 from "../assets/profile-3.jpg";
import quotes from "../assets/bg-quotes.png";

const Testimonials = () => {
  return (
    <section className="bg-main text-white pt-10 pb-[350px]">
      <div className="mx-auto w-[90%] grid md:grid-cols-3 gap-10">
        <div className="bg-testimonials p-8 rounded relative ">
          <img
            src={quotes}
            alt="quotes background"
            className="absolute -top-9 left-0"
          />
          <p className="text-[1.1em]">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
            <div className="flex items-center gap-2 mt-8">
              <img
                src={person1}
                alt="avatar"
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <p className="font-bold">Satish Patel</p>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </p>
        </div>

        <div className="bg-testimonials p-8 rounded">
          <p className="text-[1.1em]">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
            <div className="flex items-center gap-2 mt-8">
              <img
                src={person2}
                alt="avatar"
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <p className="font-bold">Bruce McKenzie</p>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </p>
        </div>

        <div className="bg-testimonials p-8 rounded">
          <p className="text-[1.1em]">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
            <div className="flex items-center gap-2 mt-8">
              <img
                src={person3}
                alt="avatar"
                className="rounded-full w-[50px] h-[50px]"
              />
              <div>
                <p className="font-bold">Iva Boyd</p>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

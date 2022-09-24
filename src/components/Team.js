import React from "react";
import productive from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";

const Team = () => {
  return (
    <section className="text-white bg-main py-20 ">
      <div className="w-[90%] mx-auto flex items-center gap-20">
        <div>
          <img src={productive} alt="stay productive" />
        </div>
        <div className="w-[50%]">
          <h2 className="text-3xl font-bold font-headings mb-5 w-[50%]">
            Stay productive, wherever you are
          </h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>{" "}
          <br />
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>{" "}
          <br />
          <p
            href="##"
            className="border-b border-callto1 text-callto1 flex items-center w-fit"
          >
            <a href="##" className="mr-2">
              See how Fylo works
            </a>{" "}
            <img src={arrow} alt="arrow" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;

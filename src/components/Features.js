import React from "react";
import access from "../assets/icon-access-anywhere.svg";
import security from "../assets/icon-security.svg";
import store from "../assets/icon-any-file.svg";
import collaboration from "../assets/icon-collaboration.svg";

const Features = () => {
  return (
    <section className=" bg-main text-white pb-28">
      <div className="mx-auto w-[70%] lg:w-[55%] items-center md:gap-20  md:grid md:grid-rows-2 grid-cols-2">
        <div className="features-box">
          <img src={access} alt="access your files" className="features-mb" />
          <h2 className="features-heading">Access your files, anywhere</h2>
          <p className="text-sm">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div className="features-box">
          <img
            src={security}
            alt="security you can trust"
            className="features-mb w-[60px]"
          />
          <h2 className="features-heading">Security you can trust</h2>
          <p className="text-sm">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className="features-box">
          <img
            src={collaboration}
            alt="collaboration"
            className="features-mb"
          />
          <h2 className="features-heading">Real-time collaboration</h2>
          <p className="text-sm">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="features-box">
          <img src={store} alt="store any type" className="features-mb" />
          <h2 className="features-heading">Store any type of file</h2>
          <p className="text-sm">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

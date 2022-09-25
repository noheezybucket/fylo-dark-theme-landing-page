import React, { useState, useEffect } from "react";

const AccessForm = () => {
  const [mail, setMail] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regx.test(mail) === true) {
      setError("");
      setCheck(true);
    } else if (mail.length === 0) {
      setError("");
    } else {
      setError("This email is not valid !");
      setCheck(false);
    }
  }, [mail]);

  const subForm = (check) => {
    if (check) {
      alert("Mail is correct");
    } else {
      alert("Mail is not correct");
    }
  };

  return (
    <section
      className="absolute rounded-xl  top-[-250px] md:top-[-200px] left-[50%] md:py-10 md:px-20 px-2 py-5 translate-x-[-50%]  bg-intromail w-[90%]  max-w-[900px]"
      id="signin"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-headings font-bold text-2xl md:text-3xl mb-2 text-center">
          Get early access today
        </h1>
        <p className="text-center text-sm mb-8">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="w-full flex items-center flex-col md:flex-row">
          <input
            type="email"
            placeholder="example@mail.com"
            className="rounded-3xl px-4 py-2 h-fit md:mr-8  block w-full text-black outline-none"
            onInput={(e) => {
              setMail(e.target.value);
              console.log(mail);
            }}
          />
          <input
            type="submit"
            value="Get Started For Free"
            className="block rounded-3xl cursor-pointer px-4 py-2 bg-callto2 hover:bg-callto1 duration-200 w-full my-5 md:max-w-[200px] w-full"
            onClick={(e) => {
              e.preventDefault();
              subForm(check);
            }}
          />
        </form>
        <span className="self-center md:self-start mt-2 text-error ">
          {error}
        </span>
      </div>
    </section>
  );
};

export default AccessForm;

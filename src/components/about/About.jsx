import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                About me
              </h1>
            </div>
            <div className="text-slate-500">
              <p>
                With a solid foundation in server-side technologies and cloud infrastructure, I strive to write clean, maintainable code and follow best practices in software architecture and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

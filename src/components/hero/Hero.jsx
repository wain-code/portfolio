import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                Hi, I'm Nguyen
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Freelance web & <br /> Back-End Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                I'm a Backend Developer with a strong passion for building scalable, secure, and high-performance systems. I specialize in designing APIs, managing databases, and developing backend services that power modern web and mobile applications
              </p>
              <div className="container flex justify-between items-center py-3 sm:py-0 gap-2">
                <a
                  href="mailto:nguyencanhnguen@gmailcom"
                  className="inline-block primary-btn !px-6">
                  Email
                </a>
                <a
                  href="https://www.facebook.com/nguyencanhnguyen.nguyen"
                  className="inline-block primary-btn !px-6">
                  Facebook
                </a>
                <a href="tel:+84764983102" className="inline-block primary-btn !px-6">
                  Phone
                </a>
              </div>
            </div>
          </div>
          {/* image container */}
          <div>
            <img
              src={personImg}
              alt="Not found"
              className="w-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;

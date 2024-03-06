import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-xl w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left lg:fixed xl:fixed">
        <h1 className="text-5xl font-extrabold mb-4 mt-16 md:mt-16 lg:mt-0 xl:mt-0">
        CodeJR
        </h1>
        <p className="text-gray-300 text-lg">
        A platform to solve your DSA QUESTIONS.
        </p>
      </div>
    </div>
  );
};

export default Intro;

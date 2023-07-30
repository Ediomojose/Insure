import React from "react";

const CallToAction = () => {
  return (
    <>
      <article className="bg-gray-800 grid grid-rows-1 justify-center items-center px-5 py-14 mx-5 gap-y-12 md:gap-y-0 md:grid-cols-2  md:p-10 md:mx-10 lg:p-20 lg:mx-40">
        <h1 className=" text-white text-4xl text-center md:text-3xl lg:text-5xl">
          Find out more about how we work.
        </h1>
        <div className="flex justify-center md:justify-end">
          <button
            className="w-full text-white py-2 border-solid border-2 border-white hover:bg-white hover:text-gray-800 duration-500 md:w-3/6"
            title="actions"
          >
            HOW WE WORK
          </button>
        </div>
      </article>
    </>
  );
};

export default CallToAction;

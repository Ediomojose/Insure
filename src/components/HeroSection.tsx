import React from "react";
import FamilyImageMobile from "../assets/images/image-intro-mobile.jpg";
import FamilyImageDesktop from "../assets/images/image-intro-desktop.jpg";

const HeroSection = () => {
  return (
    <>
      <section className=" w-auto grid grid-cols-1 justify-center items-center gap-x-10 bg-gray-800 relative md:grid-cols-2 md:px-20 md:py-5 lg:px-40 lg:py-0 ">
        <div className="px-8 py-12 text-white flex-row text-center md:text-left md:px-0 md:py-0">
          <h1 className="text-5xl my-4 md:text-4xl lg:text-6xl">
            Humanizing your insurance
          </h1>
          <p className="text-lg my-4">
            Get your life insurance coverage wasier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected
          </p>
          <button
            className="px-8 py-2 my-4 border-solid border-2 border-white hover:bg-white hover:text-gray-800 duration-500"
            title="action button"
          >
            VIEW PLANS
          </button>
        </div>
        <div>
          <picture>
            <img
              className="hidden md:block lg:w-9/12 relative top-20"
              alt="family image"
              src={FamilyImageDesktop}
            />
            <img
              className="object-cover w-full md:hidden"
              src={FamilyImageMobile}
              alt="image of a family holding hands"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

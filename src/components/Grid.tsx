import React from "react";
import SnappyImage from "../assets/images/icon-snappy-process.svg";
import PriceImage from "../assets/images/icon-affordable-prices.svg";
import PeopleImage from "../assets/images/icon-people-first.svg";

const Grid = () => {
  return (
    <>
      <aside className="grid grid-rows-1 gap-y-11 mx-5 my-7 md:my-0 md:mx-0 md:gap-y-24 md:pt-40 md:pb-20 md:px-10 lg:gap-y-38 lg:px-40 lg:pt-30">
        <h2 className="text-4xl text-center md:text-left md:text-5xl">
          We're different
        </h2>
        <div className="grid gap-y-10 md:gap-y-0 md:gap-x-6 md:grid-cols-3">
          <div className="flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
            <img className="w-1/6" src={SnappyImage} alt="strike image" />
            <h3 className="text-2xl">Snappy Process</h3>
            <p className="">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
            <img className="w-1/6" src={PriceImage} alt="Affordable price" />
            <h3 className="text-2xl">Affordable Prices </h3>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
            <img className="w-1/6" src={PeopleImage} alt="People first" />
            <h3 className="text-2xl"> People First </h3>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Grid;

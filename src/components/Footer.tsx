import React from "react";
import Logo from "../assets/images/logo.svg";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="grid  grid-cols-1 px-10 py-10 md:px-20 md:py-20 lg:px-28 lg:py-24">
        <div className="grid grid-rows-2 gap-y-5 my-5 md:grid-cols-2 md:gap-y-0">
          <img src={Logo} alt="insure logo" className="mx-auto"/>
          <ul className="flex justify-center  gap-x-4 md:justify-end">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="insure logo" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="insure logo" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={PinterestIcon} alt="insure logo" />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="insure logo" />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className=" grid grid-cols-1 mx-auto justify-center mt-8 text-center md:grid-cols-4 md:text-start" >
          <ul>
            <li className="pb-5">OUR COMPANY</li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                HOW WE WORK
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                WHY INSURE?
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                VIEW PLANS
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                REVIEWS
              </a>
            </li>
          </ul>

          <ul>
          <li className="pb-5">HELP ME</li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                TERMS OF USE
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                PRIVACY POLICY
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                COOKIES
              </a>
            </li>
          </ul>

          <ul>
          <li className="pb-5">CONTACT</li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                SALES
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                LIVE CHAT
              </a>
            </li>
          </ul>

          <ul>
          <li className="pb-5">OTHERS</li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                CAREERS
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                PRESS
              </a>
            </li>
            <li className="pb-2">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                LICENSES
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

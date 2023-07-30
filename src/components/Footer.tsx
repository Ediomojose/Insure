import React from "react";
import Logo from "../assets/images/logo.svg";
import FacebookIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img src={Logo} alt="insure logo" />
          <ul>
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
        <div>
          <ul>
            <li>OUR COMPANY</li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                HOW WE WORK
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                WHY INSURE?
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                VIEW PLANS
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                REVIEWS
              </a>
            </li>
          </ul>

          <ul>
          <li>HELP ME</li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                TERMS OF USE
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                COOKIES
              </a>
            </li>
          </ul>

          <ul>
          <li>CONTACT</li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                SALES
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                SUPPORT
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                LIVE CHAT
              </a>
            </li>
          </ul>

          <ul>
          <li>OTHERS</li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                CAREERS
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                PRESS
              </a>
            </li>
            <li>
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

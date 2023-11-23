import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div id="footer" className="py-10">
      <p className="text-center text-2xl  md:font-semibold">STAY IN TOUCH</p>
      <div className="text-center">
        <p className="inline mx-3">MAKE AN ORDER</p>
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          style={{ color: "#62554a" }}
          className="mx-3"
        />
        <a href="tel:+4917661299624">
          <FontAwesomeIcon
            icon={faPhone}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
      </div>
      <div className="icons text-center pt-5">
        <FontAwesomeIcon
          icon={faInstagram}
          size="xl"
          style={{ color: "#62554a" }}
          className="mx-3"
        />
        <FontAwesomeIcon
          icon={faTiktok}
          size="xl"
          style={{ color: "#62554a" }}
          className="mx-3"
        />
        <FontAwesomeIcon
          icon={faFacebookF}
          size="xl"
          style={{ color: "#62554a" }}
          className="mx-3"
        />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Madame+Paloma+Bakehouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faMapLocationDot}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
      </div>
    </div>
  );
};
//(98,85,74)

export default Footer;

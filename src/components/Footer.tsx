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
    <div id="footer" className="py-14">
      <p className="text-center text-2xl  md:font-semibold pb-7">
        STAY IN TOUCH
      </p>
      <div className="text-center">
        <p className="inline mx-3">MAKE AN ORDER</p>
        <a href="mailto:madamepalomabakehouse@gmail.com?subject=Inquiry&body=Hello%20Madame%20Paloma%20Bakehouse,">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
        <a href="tel:+4917661299624">
          <FontAwesomeIcon
            icon={faPhone}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
      </div>
      <div className="icons text-center pt-7">
        <a
          href="https://www.instagram.com/madame.paloma/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>

        <a
          href="https://www.tiktok.com/@madame.paloma.bakehouse?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTiktok}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
        <a
          href="https://www.facebook.com/p/Madame-Paloma-Bakehouse-100085219417779/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            size="xl"
            style={{ color: "#62554a" }}
            className="mx-3"
          />
        </a>
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

export default Footer;

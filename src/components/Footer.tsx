/* eslint-disable @next/next/no-img-element */
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
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // eslint-disable-next-line @next/next/no-img-element

  return (
    <div id="footer" className="pb-10 pt-5">
      <img
        className="mx-auto mb-8"
        src="https://res.cloudinary.com/danq3q4qv/image/upload/v1701377402/Mad%D7%A7%D7%A8%D7%9E%D7%A9%D7%A0%D7%99%D7%98ame_Paloma_hilla_n_erez_960x500ai_copy_2-2_copy_cmiax1.jpg"
        alt="logo"
        style={{ width: "300px" }}
      />
      <div className="flex flex-row items-start md:justify-center md:gap-40 justify-around ">
        <div className="text-center">
          <p className="text-center text-2xl  font-medium pb-7">VISIT US</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Madame+Paloma+Bakehouse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colbestraße 3<br /> 10247 Berlin Germany
          </a>
        </div>
        <div>
          <p className="text-center text-2xl  font-medium pb-7">
            STAY IN TOUCH
          </p>
          <div className="text-center">
            <p className="mx-3 leading-8">
              MAKE AN ORDER
              <br />
              <a href="mailto:madamepalomabakehouse@gmail.com?subject=Inquiry&body=Hello%20Madame%20Paloma%20Bakehouse,">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  style={{
                    color: "#62554a",
                    width: "1.8rem",
                    display: "inline",
                  }}
                  className="mx-3"
                />
              </a>
              <a href="tel:+4917661299624">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="xl"
                  style={{
                    color: "#62554a",
                    width: "1.7rem",
                    display: "inline",
                  }}
                  className="mx-3"
                />
              </a>
            </p>
          </div>
          <div className="icons text-center pt-7">
            <a
              href="https://www.instagram.com/madame.paloma/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="sm"
                style={{
                  color: "#62554a",
                  width: "1.9rem",
                  display: "inline",
                }}
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
                style={{
                  color: "#62554a",
                  width: "1.7rem",
                  display: "inline",
                }}
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
                style={{
                  color: "#62554a",
                  width: "1.2rem",
                  display: "inline",
                }}
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
                style={{
                  color: "#62554a",
                  width: "1.9rem",
                  display: "inline",
                }}
                className="mx-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import router, { useRouter } from "next/router";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Footer element not found");
    }
  };
  // eslint-disable-next-line @next/next/no-img-element

  return (
    <>
      <img className="red" src="/red.png" alt="splash of color - red" />
      <img
        className="Turquoise"
        src="/Turquoise.png"
        alt="splash of color - Turquoise"
      />
      <img
        className="Turquoise2"
        src="/Turquoise2.png"
        alt="splash of color - Turquoise2"
      />
      <img
        className="yellow"
        src="/yellow.png"
        alt="splash of color - yellow"
      />
      <img className="green" src="/green.png" alt="splash of color - green" />

      <img
        className="logo md:w-1/3 w-1/2"
        src="https://res.cloudinary.com/dbsd2kix0/image/upload/v1720614509/ptrb82w3vlm39wl2qxqi.png"
        alt="logo"
      />
      <div className="text-center nav-bar tracking-wide">
        <Link
          href="/"
          className={
            router.pathname === "/"
              ? "activeLink mx-5 font-bold"
              : "navLinks mx-5"
          }
        >
          HOME
        </Link>
        <Link
          href="/about"
          className={
            router.pathname === "/about"
              ? "activeLink mx-5 font-bold"
              : "navLinks mx-5"
          }
        >
          ABOUT AS
        </Link>
        <a
          onClick={() => {
            scrollToFooter();
          }}
          className="contact-link mx-5"
        >
          CONTACT
        </a>
      </div>
    </>
  );
};

export default NavBar;

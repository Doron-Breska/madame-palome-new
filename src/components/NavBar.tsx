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

  return (
    <>
      <img
        className="logo"
        src="https://res.cloudinary.com/danq3q4qv/image/upload/v1700762705/Madame%20Paloma/logo_n0yqfy_tperr9.jpg"
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
        <a onClick={scrollToFooter} className="contact-link mx-5">
          CONTACT
        </a>
      </div>
    </>
  );
};

export default NavBar;

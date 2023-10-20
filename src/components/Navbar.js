import React from "react";
import logo from "../images/logo.svg";
import { PageLinks, SocialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {PageLinks.map((link) => {
            return <PageLink {...link} itemClass={"nav-link"} />;
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((link) => {
            return <SocialLink {...link} itemClass={"nav-icon"} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

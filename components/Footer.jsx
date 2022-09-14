import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Incognito Inc. All Rights Reserved</p>
      <p className="icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/felix-pherry-340b86192/"
        >
          <AiFillLinkedin />
        </a>
        <a target="_blank" href="https://github.com/felix123136">
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;

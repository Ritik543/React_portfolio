import React from "react";
import './Footer.css';
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer flex-r">
      <div className="flex-r">
      <NavLink to="https://github.com/Ritik543" className="footer-link" target="_blank">
        <AiFillGithub fontSize="1.7em"/>
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/akash-mishra-8b695222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-link" target="_blank">
        <AiFillLinkedin fontSize="1.7em"/>
      </NavLink>
      </div>
      <div className="footer-copyright">
        Copyright © @ritiksingh543
      </div>
      <div className="flex-r">
      <NavLink to="#" className="footer-link" target="_blank">
        <BsFacebook fontSize="1.7em"/>
      </NavLink>
      <NavLink to="https://www.instagram.com/ritik61842/" className="footer-link" target="_blank">
        <AiFillInstagram fontSize="1.7em"/>
      </NavLink>
      <NavLink to="https://x.com/21cse149" className="footer-link" target="_blank">
        <RiTwitterXFill fontSize="1.7em"/>
      </NavLink>
      </div>
    </div>
  );
}

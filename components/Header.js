import React from "react";
import "./header.css";

const navItems = [
  {
    text: "instagram",
    link: "https://www.instagram.com/dcamozzo/",
    newTab: true
  },

  {
    text: "contact/about",
    link: "/about",
    newTab: false
  },

  {
    text: "video",
    link: "/video",
    newTab: false
  },

  {
    text: "prints",
    link: "/prints",
    newTab: false
  }
];

export default function Header() {
  return (
    <nav>
      <div className="title-container">
        <a href="/">
          <h1>DANNY CAMOZZO</h1>
        </a>
        <h5>- PHOTO / VIDEO -</h5>
      </div>
      <ul>
        {navItems.map(({ link, newTab, text }, i) => (
          <li key={i}>
            <a href={link} target={newTab ? "_blank" : ""}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

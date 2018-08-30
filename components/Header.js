import React from "react";
import "./header.css";
import Link from "next/link";

const navItems = [
  {
    text: "instagram",
    link: "https://www.instagram.com/dcamozzo/",
    newTab: true
  },

  {
    text: "contact/about",
    link: "/about/index",
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
            <Link href={link}>
              <a target={newTab ? "_blank" : ""}>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

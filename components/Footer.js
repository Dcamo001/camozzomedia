import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="https://www.instagram.com/dcamozzo/" target="_blank">
        <img
          className="instaLogo"
          src="../../static/InstagramLogo.png"
          alt="Instagram"
        />
      </a>

      <a href="mailto:dcamo001@gmail.com">
        <img
          className="emailLogo"
          src="../../static/EmailLogo.png"
          alt="Email"
        />
      </a>
    </footer>
  );
}

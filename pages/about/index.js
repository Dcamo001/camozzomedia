import React from "react";
import { fetchImages } from "../../helpers/s3";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <Header />

      <div>
        <img src="../../static/7R302131web.jpg" alt="Fly fishing in Montana" />
        <h2>Fly fishing - Bad Medicine Lake, Montana</h2>
        <h4>Photos and video by Danny Camozzo.</h4>
        <p>
          Hello! I am a travel/outdoors photographer and videographer who
          currently resides in Berkeley, CA. Growing up in Herndon, Virginia, I
          spent much of my time outdoors exploring the woods and rivers
          surrounding my neighborhood and developed a love of adventure, nature,
          and exploration from a young age.
        </p>
        <p>
          My interest in photography started when I received my first camera as
          a gift from grandparents just before a trip to Europe. From there, I
          sporadically picked up and put the camera down through the years until
          2015, when my family took a trip to Hawaii and I was overwhelmed by
          the colors and sights. I discovered that one of my passions is
          capturing and sharing the world as I see it in my mind.
        </p>
        <p>
          Since then, I’ve spent nearly every weekend shooting all up and down
          the West Coast, mainly focusing on sharing landscapes and nature. My
          goal with this is pretty simple: to travel and enjoy the outdoors
          while inspiring people to get outside, appreciate their surroundings,
          and help to preserve them.
        </p>
        <p>
          All content within this site is my own. I edit my work using Adobe
          Lightroom, Photoshop (sparingly), and Davinci Resolve.
        </p>
      </div>
      <Footer />
    </div>
  );
}

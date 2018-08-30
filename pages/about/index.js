import React from "react";
import { fetchImages } from "../../helpers/s3";
import Header from "../../components/Header";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <Header />
    </div>
  );
}

import React from "react";
import { fetchImages } from "../../helpers/s3";
import Header from "../../components/Header";
import "./video.css";

export default function Video() {
  return (
    <div className="video">
      <Header />
    </div>
  );
}

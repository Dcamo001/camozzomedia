import React from "react";
import { fetchImages } from "../../helpers/s3";
import Header from "../../components/Header";
import "./prints.css";

export default function Prints() {
  return (
    <div className="prints">
      <Header />
    </div>
  );
}

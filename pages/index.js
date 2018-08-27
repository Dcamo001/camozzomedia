import React, { Component } from "react";
import { fetchImages } from "../helpers/s3";

export default class Index extends Component {
  state = {
    image: ""
  };

  componentDidMount() {
    console.log("Hello");
    fetchImages();
  }

  getImage = async () => {};

  render() {
    return (
      <div>
        <p>Hello Next.js</p>
        <img src={this.state.image} />
      </div>
    );
  }
}

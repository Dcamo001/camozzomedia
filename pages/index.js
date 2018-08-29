import React, { Component } from "react";
import { fetchImages } from "../helpers/s3";

export default class Index extends Component {
  state = {
    galleries: []
  };

  async componentDidMount() {
    const galleries = [];
    const data = await fetchImages();

    data.shift(); // remove "images/", which is the first item in the array
    data.map(obj => {
      if (!obj.Key.endsWith(".jpg")) {
        const title = obj.Key.replace("images/", "").replace("/", "");
        const gallery = {
          title
        };

        const images = [];

        data.filter(function({ Key }) {
          if (Key.includes(title) && Key.includes(".jpg")) {
            images.push(Key);
          }
        });

        gallery.images = images;
        galleries.push(gallery);
      }
    });

    this.setState({ galleries });
  }

  getImage = async () => {};

  render() {
    return (
      <div>
        <p>Hello Next.js</p>
        {this.state.galleries.map(({ title, images }, i) => (
          <div className="gallery" key={i}>
            <h2>{title}</h2>
            <div className="images">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={`https://s3-us-west-1.amazonaws.com/camozzomedia/${img}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

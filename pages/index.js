import React, { Component } from "react";
import { fetchImages } from "../helpers/s3";
import Header from "../components/Header";
import "./index.css";

export default class Index extends Component {
  state = {
    galleries: [],
    loading: true
  };

  async componentDidMount() {
    const galleries = [];
    const data = await fetchImages();

    data.shift(); // remove "images/", which is the first item in the array
    data.map(obj => {
      if (!obj.Key.endsWith(".jpg")) {
        // if does not end with .jpg, therefore a folder.
        const title = obj.Key.replace("images/", "").replace("/", ""); // strip unnecessary string data
        let gallery = {
          title
        };

        const images = [];
        let thumbnail = "";
        let addedThumbnail = false;

        data.map(function({ Key }, i) {
          // get all images related to that category
          if (
            Key.includes(title) &&
            (Key.includes(".jpg") || Key.includes(".png"))
          ) {
            images.push(Key);

            if (!addedThumbnail) {
              thumbnail = Key;
              addedThumbnail = true;
            }
          }
        });

        gallery = {
          ...gallery,
          thumbnail,
          images
        };

        galleries.push(gallery);
      }
    });

    this.setState({ galleries, loading: false });
  }

  render() {
    const { loading, galleries } = this.state;

    return loading ? (
      <img src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif" />
    ) : (
      <div className="container">
        <Header />
        {galleries.map((gallery, i) => (
          <div className="gallery" key={i}>
            <h2>{gallery.title}</h2>
            <img
              src={`https://s3-us-west-1.amazonaws.com/camozzomedia/${
                gallery.thumbnail
              }`}
              key={i}
            />
            <div className="images">
              {gallery.images.map((img, i) => (
                <img
                  style={{ width: 200 }}
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

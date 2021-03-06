import React from "react";
import { Carousel } from "antd-mobile/dist/antd-mobile.min";

import banner1 from "../assets/images/huijingshen.jpg";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";

export default class App extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [banner1, banner2, banner3],
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log("slide to", index)}
      >
        {this.state.data.map((val) => (
          <a
            key={val}
            href="http://www.xsyu.edu.cn/"
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
            }}
          >
            <img
              src={val}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              height={200}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}

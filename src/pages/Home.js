import React, { Component } from "react";
import "./Home.css";
import poster from "../image/men.png";
import fb from "../image/fb.png";
import twitter from "../image/Twitter.png";
import youtube from "../image/youtube.png";

export class Home extends Component {
  render() {
    return (
      <div className="back">
        <div className="back1">
          <div className="text1">
            Email<br></br>
            quicksoyed@gmail.com
          </div>

          <div className="text2">
            Phone<br></br>
            +880 174 037 6995
          </div>

          <div className="text3">Find me on</div>
        </div>

        <div className="back3">
          <div className="santush">SANTUSH</div>

          <div className="deb">DEB</div>

          <div className="creative">Creative Director - Saint Studios</div>

          <div className="para">
            i’m Santush Deb Nath, a huge HTML lover, A<br></br>
            25-year-old living in a small but damn beautiful<br></br>
            country called Bangladesh
          </div>

          <button className="but1">
            <div className="portfolio">PORTFOLIO</div>
          </button>

          <button className="but2">
            <div className="resume">RESUME</div>
          </button>
        </div>

        <div className="poster">
          <img src={poster} alt=""></img>
        </div>

        <div className="social">
          <img src={fb} alt="" className="fb"></img>
          <img src={twitter} alt="" className="twitter"></img>
          <img src={youtube} alt="" className="youtube"></img>
        </div>
      </div>
    );
  }
}

export default Home;

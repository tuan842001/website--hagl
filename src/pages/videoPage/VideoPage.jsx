import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { videosData } from "../../data";
import "./videoPage.css";

function VideoItemLg(props) {
  return (
    <div className="videoContentLeft videoContentLeftPage">
      <div className="videoPost leftPost videoPostPage leftPostPage">
        <Link className="links" to="/video">
          <figure className="videoFigure leftFigure videoFigurePage leftFigurePage">
            <img
              className="videoImg leftImg videoImgPage"
              src="../../../image/273378933_479435000513886_5952631095965955863_n.jpg"
              alt=""
            />
            <div className="videoGradient videoGradientPage"></div>
          </figure>
          <div className="videoInfo leftInfo videoInfoPage">
            <FaPlay className="play leftPlay playPage" />
            <span className="videoTitle leftTitle videoTitlePage">
              Martial shines on Sevilla home debut
            </span>
          </div>
        </Link>
      </div>
      <div className="videoPost leftPost videoPostPage leftPostPage">
        <Link className="links" to="/video">
          <figure className="videoFigure leftFigure videoFigurePage leftFigurePage">
            <img
              className="videoImg leftImg videoImgPage"
              src="../../../image/273378933_479435000513886_5952631095965955863_n.jpg"
              alt=""
            />
            <div className="videoGradient videoGradientPage"></div>
          </figure>
          <div className="videoInfo leftInfo videoInfoPage">
            <FaPlay className="play leftPlay playPage" />
            <span className="videoTitle leftTitle videoTitlePage">
              Martial shines on Sevilla home debut
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function VideoItem(props) {
  return (
    <div className="videoContentRight videoContentRightPage">
      {videosData.map((item) => (
        <div className="videoPost videoPostPage" key={Math.random()}>
          <Link className="links" to="/video">
            <figure className="videoFigure videoFigurePage">
              <img className="videoImg videoImgPage" src={item.img} alt="" />
              <div className="videoGradient videoGradientPage"></div>
            </figure>
            <div className="videoInfo videoInfoPage">
              <FaPlay className="play playPage" />
              <span className="videoTitle videoTitlePage">{item.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function VideoPage() {
  return (
    <div className="videoPage">
      <div className="videoContent videoContentPage">
        <VideoItemLg />
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  );
}

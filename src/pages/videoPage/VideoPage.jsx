import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { videosData } from "../../data";
import "./videoPage.css";

function VideoItemLg(props) {
  return (
    <div className="videoContentLeft videoContentLeftPage">
      <div className="videoPost leftPost leftPostPage">
        <Link className="links" to="/video">
          <figure className="videoFigure leftFigure">
            <img
              className="videoImg leftImg"
              src="../../../image/273378933_479435000513886_5952631095965955863_n.jpg"
              alt=""
            />
          </figure>
          <div className="videoInfo leftInfo">
            <FaPlay className="play leftPlay" />
            <span className="videoTitle leftTitle">
              Martial shines on Sevilla home debut
            </span>
          </div>
        </Link>
      </div>
      <div className="videoPost leftPost">
        <Link className="links" to="/video">
          <figure className="videoFigure leftFigure">
            <img
              className="videoImg leftImg"
              src="../../../image/273378933_479435000513886_5952631095965955863_n.jpg"
              alt=""
            />
          </figure>
          <div className="videoInfo leftInfo">
            <FaPlay className="play leftPlay" />
            <span className="videoTitle leftTitle">
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
        <div className="videoPost" key={Math.random()}>
          <Link className="links" to="/video">
            <figure className="videoFigure">
              <img className="videoImg" src={item.img} alt="" />
            </figure>
            <div className="videoInfo">
              <FaPlay className="play" />
              <span className="videoTitle">{item.title}</span>
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

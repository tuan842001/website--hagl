import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { videosData } from "../../data";
import "./video.css";

export default function Video() {
  return (
    <div className="video">
      <div className="videoHader">
        <h2 className="videoHaderTitle">
          Videos <span>mới nhất</span>
        </h2>
        <Link to="video" className="link">
          XEM THÊM VIDEOS
          <BsArrowRight style={{ marginLeft: "10px" }} color="#02a037" />
        </Link>
      </div>
      <div className="videoContent">
        <div className="videoContentLeft">
          <div className="videoPost leftPost">
            <Link className="links" to="video">
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
        <div className="videoContentRight">
          {videosData.map((item) => (
            <div className="videoPost" key={Math.random()}>
              <Link className="links" to="video">
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
      </div>
    </div>
  );
}

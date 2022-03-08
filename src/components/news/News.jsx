import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { newsData } from "../../data";
import "./news.css";

export default function News() {
  return (
    <div className="news">
      <div className="newsHeader">
        <h2 className="newsHeaderTitle">
          Tin tức <span>mới nhất</span>
        </h2>
        <Link to="/tin-tuc" className="link">
          XEM THÊM TIN TỨC
          <BsArrowRight style={{ marginLeft: "5px" }} color="#02a037" />
        </Link>
      </div>
      <div className="newsContent">
        {newsData.map((item) => (
          <div className="newsPost" key={Math.random()}>
            <Link className="links" to="tin-tuc">
              <figure className="newsFigure">
                <img className="newsImg" src={item.img} alt="" />
              </figure>
              <div className="newsInfo">
                <h2 className="newsInfoTitle">{item.title}</h2>
                <p className="newsDesc">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

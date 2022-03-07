import React from "react";
import "./newsPage.css";
import { Link } from "react-router-dom";
import { newsData } from "../../data";

function PlayerItem(props) {
  return (
    <div className="newsContent">
      {newsData.map((item) => (
        <div className="newsPost" key={Math.random()}>
          <Link className="links" to="/tin-tuc">
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
  );
}

export default function NewsPage() {
  return (
    <div className="newsPage">
      <PlayerItem />
      <PlayerItem />
    </div>
  );
}

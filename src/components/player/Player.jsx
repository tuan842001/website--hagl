import React from "react";
import { Link } from "react-router-dom";
import "./player.css";

function PlayerItem(props) {
  return (
    <>
      <div className="playerPost">
        <Link className="links" to="/cau-thu">
          <figure className="playerFigure">
            <img className="playerImg" src={props.img} alt="" />
            <div className="gradient"></div>
          </figure>

          <div className="playerInfo">
            <span className="playerNumber">{props.number}</span>
            <span className="playerName">{props.surname}</span>
            <span className="playerName">{props.firstname}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function Player() {
  return (
    <div className="player">
      <h2 className="playerTitle">Cầu thủ</h2>

      <div className="playerContent">
        <PlayerItem
          img="../../../image/xuantruong-thumbnail.png"
          number="6"
          surname="Lương"
          firstname="Xuân Trường"
        />

        <PlayerItem
          img="../../../image/vantoan1.jpg"
          number="9"
          surname="Nguyễn"
          firstname="Văn Toàn"
        />
        <PlayerItem
          img="../../../image/congphuong-thumbnail.png"
          number="10"
          surname="Nguyễn"
          firstname="Công Phượng"
        />
        <PlayerItem
          img="../../../image/tuananh-thumbnail.png"
          number="11"
          surname="Nguyễn"
          firstname="Tuấn Anh"
        />
      </div>
    </div>
  );
}

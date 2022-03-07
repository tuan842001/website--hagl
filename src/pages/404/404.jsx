import React from "react";
import { Link } from "react-router-dom";
import "./404.css";

export default function Error({ img }) {
  return (
    <div className="error">
      <div className="errorLeft">
        <h2>
          Ooops... <br />
          Page not found
        </h2>
        <span>
          Hiện trang đang trong quá trình phát triển, mời bạn quay lại sau!
        </span>
        <Link className="link errorButton" to="/">
          Quay lại
        </Link>
      </div>
      <div className="errorRight">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

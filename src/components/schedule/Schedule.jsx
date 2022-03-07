import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { machesData } from "../../data";
import "./schedule.css";

export default class Schedule extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="schedule">
        <div className="scheduleHader">
          <h2 className="scheduleHaderTitle">Lịch thi đấu</h2>
          <Link to="/lich-thi-dau" className="link">
            XEM THÊM LỊCH THI ĐẤU
            <BsArrowRight style={{ marginLeft: "10px" }} color="#02a037" />
          </Link>
        </div>
        <Slider {...settings}>
          {machesData.map((item) => (
            <div className="schedulePost" key={Math.random()}>
              <Link className="links" to="/lich-thi-dau">
                <div className="scheduleItem">
                  <span className="scheduleLeague">
                    <img src={item.img} alt="" />
                  </span>
                  <span className="scheduleInfoTeasure">
                    <span>{item.date}</span>
                    <span>{item.time}</span>
                  </span>
                  <div className="scheduleItemInfo">
                    <div className="scheduleItemInfoLeft">
                      <img src={item.home} alt="" />
                      <span>{item.homeName}</span>
                    </div>
                    <div className="scheduleItemInfoCenter">
                      <span>{item.score}</span>
                      <p>vs</p>
                    </div>
                    <div className="scheduleItemInfoRight">
                      <img src={item.away} alt="" />
                      <span>{item.awayName}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

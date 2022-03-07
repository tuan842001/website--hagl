import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch, BsChevronRight } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topLeft">
        <Link className="link action" to="/">
          <img className="topLogo" src="../../../image/hagl.png" alt="" />
        </Link>
        <div className="topBars">
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaBars className="iconBars" />
              <span>
                <GrClose className="iconColse" />
              </span>
            </button>
            <ul
              className="dropdown-menu topListMobile"
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="topListItemMobile">
                <NavLink className="link action" to="/">
                  <span>TRANG CHỦ</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              <li className="topListItemMobile">
                <NavLink className="link action" to="/video">
                  <span>VIDEOS</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              <li className="topListItemMobile">
                <NavLink className="link action" to="/tin-tuc">
                  <span>TIN TỨC</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              {/* <li className="topListItemMobile">
                <NavLink className="link action" to="/cua-hang">
                  <span>CỬA HÀNG</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li> */}
              <li className="topListItemMobile">
                <NavLink className="link action" to="/lich-thi-dau">
                  <span>LỊCH THI ĐẤU</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              <li className="topListItemMobile">
                <NavLink className="link action" to="/cau-thu">
                  <span>CẦU THỦ</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              <li className="topListItemMobile">
                <NavLink className="link action" to="/gioi-thieu">
                  <span>GIỚI THIỆU</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
              <li className="topListItemMobile">
                <NavLink className="link action" to="/lien-he">
                  <span>LIÊN HỆ</span>
                  <BsChevronRight color="#02a037" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <ul className="topList">
          <li className="topListItem">
            <NavLink className="link action" to="/video">
              VIDEOS
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link action" to="/tin-tuc">
              TIN TỨC
            </NavLink>
          </li>
          {/* <li className="topListItem">
            <NavLink className="link action" to="/cua-hang">
              CỬA HÀNG
            </NavLink>
          </li> */}
          <li className="topListItem">
            <NavLink className="link action" to="/lich-thi-dau">
              LỊCH THI ĐẤU
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link action" to="/cau-thu">
              CẦU THỦ
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link action" to="/gioi-thieu">
              GIỚI THIỆU
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link action" to="/lien-he">
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className=" topSearch">
            <form className="topRightForm" action="">
              <input
                className="topRightInput"
                type="text"
                placeholder="Tìm kiếm ..."
              />
              <button type="submit" className="topRightButton">
                <BsSearch />
              </button>
            </form>
          </li>
        </ul>
        <ul className="topList">
          <img className="topLogo" src="../../../image/redbull.png" alt="" />
        </ul>
      </div>
    </div>
  );
}

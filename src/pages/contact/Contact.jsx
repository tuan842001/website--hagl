import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contactTitle">Liên hệ với chúng tôi</h2>
      <div className="contactTop">
        <ul className="contactList">
          <li className="contactListItem">
            <FaMapMarkerAlt className="contactListItemIcon" />
            <span>15 Trường Chinh, Pleiku</span>
          </li>
          <li className="contactListItem">
            <FaPhone className="contactListItemIcon" />
            0935 798 345
          </li>
          <li className="contactListItem">
            <FaEnvelope className="contactListItemIcon" />
            info@nextmedia.vn
          </li>
        </ul>
      </div>
      <div className="contactBottom">
        <form action="">
          <div className="contactBottomLeft">
            <div className="contactBottomLeftForm">
              <label className="contactLabel">Tên</label>
              <span>
                <FaUser className="contactBottomLeftIcon" />
                <input type="text" />
              </span>
            </div>
            <div className="contactBottomLeftForm">
              <label className="contactLabel">Mail</label>
              <span>
                <FaEnvelope className="contactBottomLeftIcon" />
                <input type="email" />
              </span>
            </div>
            <div className="contactBottomLeftForm">
              <label className="contactLabel">Số điện thoại</label>
              <span>
                <BsPhone className="contactBottomLeftIcon" />
                <input type="tel" />
              </span>
            </div>
          </div>
          <div className="contactBottomRight">
            <label className="contactLabel">Nội dung</label>
            <textarea
              name=""
              cols="30"
              rows="10"
              placeholder="Nội dung"
            ></textarea>
          </div>
          <button type="submit" className="contactBottomButton">
            Liên hệ
            <FaTelegramPlane style={{ marginLeft: "5px" }} />
          </button>
        </form>
      </div>
    </div>
  );
}

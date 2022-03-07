import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sponsor">
        <ul className="footerSponsor">
          <li className="footerSponsorItem">
            <img src="../../../image/redbull.png" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img src="../../../image/03fcb773ef0620587917.jpg" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img src="../../../image/mizuno.png" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img src="../../../image/51c855700005cf5b9614.jpg" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img src="../../../image/dfc805455830976ece21.jpg" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img src="../../../image/f66e3e0a367ff921a06e.jpg" alt="" />
          </li>
          <li className="footerSponsorItem">
            <img
              src="../../../image/248035170_472943527712439_5538452789494656863_n1.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="footerSocialLinks">
        <div className="socialIcons">
          <div className="socialIconsLogo">
            <img src="../../../image/hagl.png" alt="" />
          </div>
          <ul className="socialMediaLink">
            <li>
              <a href="https://www.facebook.com/haglfc.clb/">
                <FaFacebookF className="socialMediaLinkIcon" />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/channel/UCbkGVq3Y7LCULCI8YI_0SlA">
                <IoLogoYoutube className="socialMediaLinkIcon" />
              </a>
            </li>
            <li>
              <a href=".">
                <BsTwitter className="socialMediaLinkIcon" />
              </a>
            </li>
            <li>
              <a href=".">
                <BsInstagram className="socialMediaLinkIcon" />
              </a>
            </li>
            <li>
              <a href=".">
                <FaTiktok className="socialMediaLinkIcon" />
              </a>
            </li>
          </ul>
          <div className="socialButton">
            <div className="socialButtonLeft">
              <Link to="/dang-nhap" className="link">
                Đăng nhập
              </Link>
            </div>
            <div className="socialButtonRight">
              <Link to="/dang-ky" className="link">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

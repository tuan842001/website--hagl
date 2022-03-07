import React from "react";
import "./login.css";
import { FaFacebookF } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginHeader">
        <Link to="/" className="link">
          <IoCloseCircle className="loginHeaderIcon" />
        </Link>
      </div>
      <div className="loginContainer">
        <div className="loginTop">
          <div className="loginTitle">
            <h2>ĐĂNG NHẬP</h2>
            <span>
              Bạn không có tài khoản?
              <Link to="/dang-ky" className="link">
                Đăng ký ngay
              </Link>
            </span>
          </div>
          <div className="loginProviders">
            <span className="">
              <FaFacebookF className="loginProvidersIcon" />
              Đăng nhập bằng Facebook
            </span>
            <span className="loginProvidersGoogle">
              <FcGoogle className="loginProvidersIcon" />
              Đăng nhập bằng Google
            </span>
          </div>
        </div>
        <div className="loginBottom">
          <span>hoặc</span>
          <div className="loginBottomForm">
            <div>
              <span>Địa chỉ email</span>
              <input type="email" />
            </div>
            <div>
              <span>Mật khẩu</span>
              <input type="password" />
            </div>
            <Link to="/" className="button link">
              Đăng nhập
            </Link>
            <div className="loginControl">
              <span>
                <input type="radio" />
                Giữ tôi luôn đăng nhập
              </span>
              <span>Quên mật khẩu?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

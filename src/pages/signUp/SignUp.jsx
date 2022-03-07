import React from "react";
import "./signUp.css";
import { FaFacebookF } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="signup">
      <div className="signupHeader">
        <Link to="/" className="link">
          <IoCloseCircle className="signupHeaderIcon" />
        </Link>
      </div>
      <div className="signupContainer">
        <div className="signupTop">
          <div className="signupTitle">
            <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
            <span>
              Bạn đã có tài khoản?
              <Link to="/dang-nhap" className="link">
                Đăng nhập ngay
              </Link>
            </span>
          </div>
          <div className="signupProviders">
            <span className="">
              <FaFacebookF className="signupProvidersIcon" />
              Đăng ký bằng Facebook
            </span>
            <span className="signupProvidersGoogle">
              <FcGoogle className="signupProvidersIcon" />
              Đăng ký bằng Google
            </span>
          </div>
        </div>
        <div className="signupBottom">
          <span>hoặc</span>
          <div className="signupBottomForm">
            <div>
              <span>Họ</span>
              <input type="text" />
            </div>
            <div>
              <span>Tên</span>
              <input type="text" />
            </div>
            <div>
              <span>Địa chỉ email</span>
              <input type="email" />
            </div>
            <div>
              <span>Mật khẩu</span>
              <input type="password" />
            </div>
            <div className="button">Đăng ký thành viên</div>
          </div>
        </div>
      </div>
    </div>
  );
}

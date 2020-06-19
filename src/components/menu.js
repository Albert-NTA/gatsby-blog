import React from "react";
import "./menu.css";
import { Link } from "gatsby";

export default (props) => {
  const { title } = props;

  return (
    <header>
      <h3 className="nav-brand"><Link to={`/`} className="u-text800 u-fontBold u-textPrimary">{ title }</Link></h3>
      <ul>
        <li className="nav-item u-text600 u-fontBold"><Link to={`/contact/`} className="u-textPrimary">Liên hệ</Link></li>
        <li className="nav-item u-text600 u-fontBold"><Link to={`/intro/`} className="u-textPrimary">Giới thiệu</Link></li>
        <li className="nav-item u-text600 u-fontBold"><Link to={`/`} className="u-textPrimary">Trang chủ</Link></li>
      </ul>
    </header>
  )
}
import React from "react";
import "./menu.css";
import { Link } from "gatsby";

export default (props) => {
  const { title } = props;

  return (
    <header>
      <h3 className="nav-brand"><Link to={`/`}>{ title }</Link></h3>
      <ul>
        <li className="nav-item"><Link to={`/contact/`}>Liên hệ</Link></li>
        <li className="nav-item"><Link to={`/intro/`}>Giới thiệu</Link></li>
        <li className="nav-item"><Link to={`/`}>Trang chủ</Link></li>
      </ul>
    </header>
  )
}
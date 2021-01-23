import React from "react";
import "./style.css";
import img from './img/AlloCloud.png'

function Header() {
  return (
    <div className="header">
     <a href="https://www.allocloud.com/"> <img
        className="header_logo"
        src={img}
      /> </a>
      <h3>Scrum<span>ban</span></h3>
    </div>
  );
}

export default Header;

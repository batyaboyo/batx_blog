import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="fund__header section__padding" id="home">
      <div className="fund__header-content">
        <h1 className="gradient__text">CrowdNuru</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur vitae ducimus
          ex nostrum autem ab voluptates
        </p>
        <div className="fund__header-content__input">
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="fund__header-image">
        <img src={ai} alt="ai" />
      </div> 
    </div>
  );
};

export default Header;

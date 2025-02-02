import React from "react";
import "../../css/HomeBoardCard.css";

function HomeBoardCard(props) {
  return (
    <div className="home-board-card">
      <div className="board-title-box">
        <p className="board-title">{props.title}</p>
        <p className="board-subtitle">{props.subtitle}</p>
        <p className="plus-btn">+</p>
      </div>
      <ul className="board-content-box">
        <li className="board-content">글1</li>
        <li className="board-content">글2</li>
        <li className="board-content">글3</li>
        <li className="board-content">글4</li>
      </ul>
    </div>
  );
}

export default HomeBoardCard;

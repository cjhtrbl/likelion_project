import React from "react";
import BoardList from "./BoardList";
import "../../css/Board.css";
import main_search_icon from "../../images/main-search-icon.png";
import board_write_icon from "../../images/board-write-icon.png";

function GroupBoard() {
  return (
    <>
      <div className="board">
        <div className="board-top">
          <div className="board-search">
            <input
              className="board-search-input"
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <img className="board-search-icon" src={main_search_icon} />
          </div>
          <button className="button">
            <img className="board-write-icon" src={board_write_icon} />
            <div className="write-btn">글쓰기</div>
          </button>
        </div>
    
        <div className="board-middle">
            <BoardList/>
        </div>
        
        <div className="board-bottom">
        </div>
      </div>
    </>
  );
}

export default GroupBoard;
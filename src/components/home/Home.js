import React from "react";
import HomeBannerCard from "./HomeBannerCard";
import HomeBoardCard from "./HomeBoardCard";
import "../../css/Home.css";
import Search from "./Search";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-top">
          <div>
            <span className="dorm-title">명륜학사</span>
            <span className="dorm-subtitle">E하우스</span>
          </div>
          <div>
            <button className="btn-m">명륜</button>
            <button className="btn-b">봉룡</button>
          </div>
        </div>
        <input
          className="home-search"
          type="text"
          placeholder="검색어를 입력하세요"
        />

        <div className="home-middle">
          <div className="upper-card">
            <HomeBoardCard />
          </div>
          <div className="upper-card">
            <HomeBoardCard />
          </div>
        </div>

        <div className="home-banner">
          <HomeBannerCard />
          <HomeBannerCard />
          <HomeBannerCard />
          <HomeBannerCard />
          <HomeBannerCard />
          <HomeBannerCard />
        </div>

        <div className="home-bottom">
          <div className="lower-card">
            <HomeBoardCard />
          </div>
          <div className="lower-card">
            <HomeBoardCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

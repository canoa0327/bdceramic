import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import maindata from "../../data/maindata.json";


export default function MainContents() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{"paddingTop": "96px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="main_img" src="images/main/main_cover1.jpg" alt="메인이미지" />
          <div style={{"padding": "20px 0px"}}>
            <div className="carousel-caption" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
              <h1 className="main-title1">최고의 품질로 모든 공종을 책임 시공하는</h1>
              <h1 className="main-title2">건축 내·외장재 유통 전문 기업</h1>
              <h1 className="main-title3">백두세라믹</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="main-container">
      <section className="con_product">
        <div>
          <h3 className="prod_title">백두세라믹 대표 시공사례</h3>
        </div>
        <div className="prod_content" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
          {
            maindata.map((a, i) => {
              return (
                <div className="prod_link">
                  <img src={maindata[i].src} alt="" />
                </div>
              )
            })
          }
          
        </div>

      </section>
      <section style={{"paddingBottom": "140px", "overflowX": "hidden"}}>
        <h3 className="prod_title" style={{"textAlign": "center"}}>전시장 및 제품문의</h3>
        <div className="row">
          <div className="col-6 gallery-info" style={{"background": "#efe9e4"}} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
            <div className="row">
              <div className="col-6">
                <div id="map" style={{"width": "100%", "height": "300px", "margin": "0 auto"}}></div>
              </div>
              <div className="col-6" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
                <h1>하남전시장</h1>
                <p>경기 하남시 하남대로 308</p>
                <p>(구) 경기도 하남시 하산곡동 426-4</p>
                <p>대표전화 | 031-794-1016</p>
                <p>시공문의 | 010-2347-8507</p>
                <p>자재문의 | 010-5091-8994</p>
              </div>
            </div>

          </div>
          <div className="col-6 text-center p-0" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
            <img src="images/main/second_cover.png" alt="백두세라믹_전시장" width="100%" />
          </div>
        </div>

      </section>
    </div>
    </>
  );
}
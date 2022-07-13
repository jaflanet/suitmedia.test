import React from "react";
import "./OurValue.css";
import icon1 from "../../asset/light.png";
import icon2 from "../../asset/bank.png";
import icon3 from "../../asset/balance.png";
const OurValue = () => {
  return (
    <>
      <div style={{paddingBottom:"20px"}}>
        <div style={{ paddingTop: "100px" }}>
          <center>
            <h1>Our Values</h1>
          </center>
        </div>
        <div className="boxContainer">
          <div className="boxItem" style={{backgroundColor:"#ea7c6f"}}>
            <div className="boxIconContainer">
                <img src={icon1} alt="iconInovative" className="boxIcon"/>
            </div>
            <div className="boxHeader"><h2>INOVATIVE</h2></div>
            <div className="boxContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse finibus eget dui in dignissim. Sed tincidunt laoreet
              nunc quis sodales. Phasellus ultrices libero lacus, sed finibus
              ipsum pulvinar vel. 
            </div>
          </div>
          <div className="boxItem" style={{backgroundColor:"#6a996f"}}>
            <div className="boxIconContainer">
                <img src={icon2} style={{ width:"20%" }}alt="iconInovative" className="boxIcon"/>
            </div>
            <div className="boxHeader"><h2>LOYALTY</h2></div>
            <div className="boxContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse finibus eget dui in dignissim. Sed tincidunt laoreet
              nunc quis sodales. Phasellus ultrices libero lacus, sed finibus
              ipsum pulvinar vel. 
            </div>
          </div>
          <div className="boxItem" style={{backgroundColor:"#5696c2"}}>
            <div className="boxIconContainer">
                <img src={icon3} style={{ width:"25%" }}alt="iconInovative" className="boxIcon"/>
            </div>
            <div className="boxHeader"><h2>RESPECT</h2></div>
            <div className="boxContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse finibus eget dui in dignissim. Sed tincidunt laoreet
              nunc quis sodales. Phasellus ultrices libero lacus, sed finibus
              ipsum pulvinar vel. 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValue;

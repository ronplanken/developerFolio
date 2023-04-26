import React, {useContext} from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {splashScreen} from "../../portfolio";
import "./SplashScreen.css";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="splash-title">
          <span className="logo-name">
            <img
              src={require("../../assets/images/kayma.png")}
              alt={"Kayma"}
            ></img>
          </span>
        </span>
      </div>
    </div>
  );
}

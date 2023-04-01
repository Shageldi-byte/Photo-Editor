import "./footer.css";
import GitHubButton from "react-github-btn";
import InfoSectionFooter from "../InfoSectionFooter";
import React from "react";
import ScaleSlider from "../sliders/ScaleSlider";

export default function Footer(props) {
  return (
    <div className="footer-wrapper">
      <div className="left-panel">
        <InfoSectionFooter />
      </div>
      <div className="center-panel">
        {!props.showCropCanvas && <ScaleSlider />}
      </div>
    </div>
  );
}

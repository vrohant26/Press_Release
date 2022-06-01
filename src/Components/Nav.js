import React from "react";
import logo from "../Assets/white-logo.png";

export default function Nav() {
  return (
    <div className="bg-blue">
      <div className="container bar">
        <div className="logo" style={{ width: "0px" }}>
          <img src={logo} width={70} alt="..." />
        </div>
      </div>
    </div>
  );
}

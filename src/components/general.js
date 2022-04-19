import React from "react";
import "../styles.css";

export function TitleBar({ title }) {
  return <div className="pageTitle">{title}</div>;
}

export function Logo({ logo }) {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

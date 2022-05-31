import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pb-24">
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
    </div>
  );
}
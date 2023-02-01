import React from "react";
import "./boxRender.css";

export default function BoxRender({cor}) {
    return (
        <div>
        <div className={cor}>
          <div className="detailQ"></div>
        </div>
        </div>
    )
}
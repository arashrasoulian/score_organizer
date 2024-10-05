import React from "react";
import { Link } from "react-router-dom";
export default function Scorelist({ props, title }) {

  return (
    <div className="hompage-list-container">
      <div className="homepage-list-title py-1 px-5">{title}</div>
      {props.map((item ,index) => {
        return (
          <div className="homepage-list-eachbox py-1 px-3"  style = {{animationDelay: `${ index * 0.5}s`}}>
            <Link to={`/scores/${item.id}`} className="scorelist-link">
              <div className="homepage-list-box-name mb-1">
                <b>{item.name}</b>
              </div>
              <div> {item.composer}</div>
              <div> {item.instrument}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

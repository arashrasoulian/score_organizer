import React from "react";
export default function Scorelist({ props, title }) {

  return (
    <div className="hompage-list-container">
      <div className="homepage-list-title py-1 px-5">{title}</div>
      {props.map((item) => {
        return (
          <div className="homepage-list-eachbox py-1 px-3">
            <div className="homepage-list-box-name">{item.name}</div>
            <div> {item.composer}</div>
            <div> {item.instrument}</div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

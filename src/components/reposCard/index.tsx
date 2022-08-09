import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, repo_url }: { title: string; repo_url: string }) {



  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <a href={repo_url} target="_blank" rel="noreferrer">{title}</a>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px"
        }}
      />
    </div>
  );
}

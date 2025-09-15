import React from "react";

export default function Button(children) {
  let { text, className } = children;
  return (
    <>
      <button className={`${className}`}>{text}</button>
    </>
  );
}

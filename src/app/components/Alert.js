import React from "react";

export default function Alert({ message }) {
  return (
    <>
      <section>
        <h1 className="text-center text-2xl ">{message}</h1>
      </section>
    </>
  );
}

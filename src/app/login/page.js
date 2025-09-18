"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form from "../components/Form";

export default function Account() {
  const [submit, setSubmit] = useState({
    email: "",
    password: "",
  });
  const hanldeValue = (e) => {
    let { name, value } = e.target;
    setSubmit((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(submit);
    console.log("submit");
    setSubmit({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <section className="w-[100%] h-auto flex items-center justify-center flex-col mt-14">
        <Form
          handleForm={handleForm}
          hanldeValue={hanldeValue}
          submit={submit}
        />
      </section>
    </>
  );
}

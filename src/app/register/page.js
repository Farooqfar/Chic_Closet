"use client";
import React, { useState } from "react";
import Form from "../components/Form";
import { api } from "../lib/axios";

export default function Register() {
  const [submit, setSubmit] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    Confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const hanldeValue = (e) => {
    let { name, value } = e.target;
    setSubmit((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (submit.password !== submit.Confirm_password) {
        return;
      }
      let submit_Form = await api.post("/register", submit);
      setSubmit({
        Fname: "",
        Lname: "",
        email: "",
        password: "",
        Confirm_password: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-[100%] h-auto flex items-center justify-center flex-col mt-14">
        <Form
          handleForm={handleForm}
          hanldeValue={hanldeValue}
          submit={submit}
          loading={loading}
        />
      </section>
    </>
  );
}

"use client";
import React, { useState } from "react";
import Form from "../components/Form";
import { api } from "../lib/axios";
import Alert from "../components/Alert";
import { GiSkullCrossedBones } from "react-icons/gi";

export default function Register() {
  const [handleError, setHandleError] = useState(false);
  const [backError, setBackError] = useState(false);
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
        setHandleError(true);
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
      setHandleError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-[100%] h-auto flex items-center justify-center flex-col mt-14">
        {handleError && (
          <div className="w-[85%] flex gap-2 justify-between items-center  text-red-700 bg-red-200 border-red-400 border m-5 p-2">
            <Alert message="Please check your Email and Password" />
            <GiSkullCrossedBones
              className="text-2xl hover:scale-90 transition-all duration-300 cursor-pointer"
              onClick={() => setHandleError(false)}
            />
          </div>
        )}

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

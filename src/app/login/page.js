"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form from "../components/Form";
import { api } from "../lib/axios";
import { useRouter } from "next/navigation";
export default function Account() {
  const [submit, setSubmit] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const hanldeValue = (e) => {
    let { name, value } = e.target;
    setSubmit((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      let res = await api.post("/login", submit);
      if (res.data.success) {
        router.push("/");
      }
    } catch (error) {
      return error;
    }
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

"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form from "../components/Form";
import { api } from "../lib/axios";
import { useRouter } from "next/navigation";
import Alert from "../components/Alert";
import { GiSkullCrossedBones } from "react-icons/gi";
export default function Account() {
  const [handleError, setHandleError] = useState(false);
  const [userName, setUserName] = useState(null);
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
      console.log(res.data.user);
      setUserName(res.data.user.email);
      if (res.data.success) {
        router.push("/");
      }
    } catch (error) {
      setHandleError(true);
    }
    setSubmit({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <section className="w-[100%] h-auto flex items-center justify-center flex-col mt-14">
        {handleError && (
          <div className="w-[85%] flex gap-2 justify-between items-center  text-red-700 bg-red-200 border-red-400 border m-5 p-2">
            <Alert message="Please check your email or password" />
            <GiSkullCrossedBones
              className="text-2xl hover:scale-90 transition-all duration-300 cursor-pointer"
              onClick={() => setHandleError(false)}
            />
          </div>
        )}

        {userName ? (
          <h1>Email :{userName}</h1>
        ) : (
          <Form
            handleForm={handleForm}
            hanldeValue={hanldeValue}
            submit={submit}
          />
        )}
      </section>
    </>
  );
}

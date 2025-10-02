import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Form({ hanldeValue, handleForm, submit, loading }) {
  const pathname = usePathname();
  return (
    <>
      <form
        onSubmit={handleForm}
        className="w-[50%] flex flex-col border p-4 justify-center items-center gap-7 mb-10"
      >
        <h1 className="text-3xl  font-light">
          {pathname === "/login" ? "Login" : "Register"}
        </h1>
        {pathname !== "/login" && (
          <div className="w-full">
            <h1>First Name :</h1>
            <input
              type="text"
              name="Fname"
              value={submit.Fname}
              onChange={hanldeValue}
              className="w-full p-2 border outline-none"
              required
            />
          </div>
        )}
        {pathname !== "/login" && (
          <div className="w-full">
            <h1>Last Name :</h1>
            <input
              type="text"
              name="Lname"
              value={submit.Lname}
              onChange={hanldeValue}
              className="w-full p-2 border outline-none"
              required
            />
          </div>
        )}
        <div className="w-full">
          <h1>Email :</h1>
          <input
            type="email"
            name="email"
            value={submit.email}
            onChange={hanldeValue}
            className="w-full p-2 border outline-none"
            required
          />
        </div>
        <div className="w-full">
          <h1>Password</h1>
          <input
            type="password"
            name="password"
            className="w-full p-2 border outline-none"
            required
            value={submit.password}
            onChange={hanldeValue}
          />
        </div>
        {pathname !== "/login" && (
          <div className="w-full">
            <h1>Confirm password</h1>
            <input
              type="password"
              name="Confirm_password"
              className="w-full p-2 border outline-none"
              required
              value={submit.Confirm_password}
              onChange={hanldeValue}
            />
          </div>
        )}
        {pathname === "/login" ? (
          <button
            className="p-2 bg-black text-white w-32 cursor-pointer hover:scale-95 transition-all duration-300 hover:rounded"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submit..." : "Login"}
          </button>
        ) : (
          <button
            className={`p-2 bg-black text-white w-32 cursor-pointer hover:scale-95 transition-all duration-300 hover:rounded ${
              loading ? "bg-gray-400 " : ""
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Submit..." : "Register"}
          </button>
        )}
        {pathname === "/login" ? (
          <Link
            href="/auth/register"
            className="cursor-pointer hover:scale-110 transition-all duration-300  underline"
          >
            Register
          </Link>
        ) : (
          <Link
            href="/login"
            className="cursor-pointer hover:scale-110 transition-all duration-300  underline"
          >
            Login
          </Link>
        )}
      </form>
    </>
  );
}

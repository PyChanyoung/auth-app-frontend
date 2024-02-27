"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Backend_URL } from "@/lib/Constants";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = data.current;

    if (!name || !email || !password) {
      console.log("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch(Backend_URL + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.current),
      });

      if (res.ok) {
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-slate-400 bg-slate-600">
        <h1 className="text-xl font-bold text-white my-4">
          Please enter the details
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => (data.current.name = e.target.value)}
            type="text"
            placeholder="Full Name"
            className="placeholder-gray-500"
          />
          <input
            onChange={(e) => (data.current.email = e.target.value)}
            type="text"
            placeholder="Email"
            className="placeholder-gray-500"
          />
          <input
            onChange={(e) => (data.current.password = e.target.value)}
            type="password"
            placeholder="Password"
            className="placeholder-gray-500"
          />
          <button
            type="submit"
            className="shadow-lg rounded-lg bg-indigo-400 text-white font-bold cursor-pinter px-6 py-2"
          >
            Register
          </button>
          <div>
            <Link className="text-sm mt-3 text-right text-white" href={"/"}>
              Already have an account?
              <span className="underline">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// front/src/components/LoginForm.tsx
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

type FormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const data = useRef<FormInputs>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data.current;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Credentials are incorrect. Please check email and password.");
    } else {
      console.log(res?.ok, res?.status, res?.url);
      router.replace("/dashboard");
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-slate-400 bg-slate-600">
        <h1 className="text-xl font-bold text-white my-4">Enter the details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="shadow-lg rounded-lg flex-grow  border-slate-600 bg-indigo-400 text-white font-bold cursor-pinter px-6 py-2"
            >
              Login
            </button>

            <button
              type="button"
              className="shadow-lg rounded-lg flex-grow border-slate-600 bg-indigo-400 text-white font-bold cursor-pinter px-6 py-2"
            >
              <Link href={"/register"}>Sign Up</Link>
            </button>
          </div>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

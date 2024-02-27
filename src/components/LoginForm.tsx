// front/src/components/LoginForm.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log(`Page moved to ${pathname}`);
  }, [pathname]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      console.log(res.error);
    } else {
      router.replace("/dashboard");
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-slate-400 bg-slate-600">
        <h1 className="text-xl font-bold text-white my-4">Enter the details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="placeholder-gray-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
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
        </form>
      </div>
    </div>
  );
}

// front/src/components/UserInfo.tsx
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zinc-300 bg-opacity-10 flex flex-col gap-2 my-6">
          <div className="text-white">
            Email:{" "}
            <span className="font-bold text-white">{session.user.email}</span>
          </div>
          <div className="text-white">
            Name:{" "}
            <span className="font-bold text-white">{session.user.name}</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

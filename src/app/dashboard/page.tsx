// front/src/app/api/dashboard/page.tsx

"use client"; // 클라이언트 사이드 실행을 명시

import UserInfo from "@/components/UserInfo";
import { useSession, signIn } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserInfo />
    </div>
  );
}

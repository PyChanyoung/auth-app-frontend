// front/src/lib/authOptions.ts

import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// Define refreshToken function
async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(Backend_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backend_tokens.renew_token}`,
    },
  });

  const response = await res.json();

  return {
    ...token,
    backendTokens: response,
  };
}

// NextAuth configuration
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await fetch(Backend_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          console.log(res.statusText, res.status, res.url);

          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backend_tokens.expiresIn) return token;

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backend_tokens = token.backend_tokens;

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

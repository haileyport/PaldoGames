import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./../../../../libs/client";
import KakaoProvider from "next-auth/providers/kakao";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.SECRET,
  },
  // jwt 커스텀 코드
  callbacks: {
    async jwt({ token, user }) {
      console.log("token: " + token);
      // token 정보 커스텀
      if (user) {
        token.role = "USER";
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      // token 정보 기반으로 세션 확인
      session.role = token.role;
      console.log(session);
      return session;
    },
  },
});

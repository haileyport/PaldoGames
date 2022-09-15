import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';
import GithubProvider from 'next-auth/providers/github';

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
});

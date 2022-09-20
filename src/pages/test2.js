import { signIn, useSession, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
  }
  return (
    <div>
      {session ? (
        <>
          <img src={session.user.image} width='100px' height='100px' />
          <div>이름: {session.user.name}</div>
          <div>이메일: {session.user.email}</div>
          <button type='button' onClick={() => signOut()}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button type='button' onClick={() => signIn("github")}>
            깃허브로 로그인
          </button>
        </>
      )}
    </div>
  );
}

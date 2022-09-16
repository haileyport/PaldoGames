import { signIn, useSession, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  return (
    // 세션 유무로 분기 ( 내부에 모달 구현 )
    // 없는 이미지 (default image)

    <div>
      {session ? (
        <>
          <img src={session.user.image} width='100px' height='100px' />
          <div>이름: {session.user.name}</div>
          <div>이메일: {session.user.email}</div>
          <button type='button' onClick={() => signOut('kakao')}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button type='button' onClick={() => signIn('kakao')}>
            카카오로 로그인
          </button>
          <button type='button' onClick={() => signIn('github')}>
            깃허브로 로그인
          </button>
        </>
      )}
    </div>
  );
}

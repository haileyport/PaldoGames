import { signIn, useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../src/states';

export default function Login() {
  const { data: session } = useSession();

  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    session && setCurrentUser({ isLoggedIn: true, currentUser: session.user });
  }, [session, setCurrentUser]);

  return (
    <div>
      {session ? (
        <>
          <input type='image' src={session.user.image} width='100px' height='100px' />
          <div>이름: {session.user.name}</div>
          <div>이메일: {session.user.email}</div>
          <button type='button' onClick={() => signOut()}>
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

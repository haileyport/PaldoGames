import { signIn, useSession, signOut } from "next-auth/react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Login(){
	const { data, status } = useSession();
  return (
    <div className={styles.main}>
        {data?.user ? (
            <>
                <img src={data?.user?.image} width="100px" height="100px"/>
                <div>이름: {data?.user?.name}</div>
                <div>이메일: {data?.user?.email}</div>
                <button type="button" onClick={() => signOut()}>
                     로그아웃
                </button>
            </>
        ) : (
          <>
          <h1>Login</h1>
          <button type="button" onClick={() => signIn("kakao")}>
            카카오로 로그인
            </button>
            <button type="button" onClick={() => signIn("github")}>
            깃허브로 로그인
            </button>
            </>
        )}
      </div>
  )
}
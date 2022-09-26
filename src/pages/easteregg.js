import { getSession } from "next-auth/react";
import Head from "next/head";
import FooterEasterEgg from "../components/Home/Footer/EasterEgg/FooterEasterEgg";

const EasterEgg = () => {
  return (
    <>
      <Head>
        <title>커뮤니티공간</title>
        <meta name='description' content='커뮤니티' />
      </Head>
      <FooterEasterEgg />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default EasterEgg;

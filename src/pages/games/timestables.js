import { getSession } from "next-auth/react";
import Head from "next/head";
import { TimesTablesMain } from "../../components/Games/TimesTables/TimesTablesMain";
import { MainSection } from "../../components/Home/Main/Main.style";

const TimesTables = () => {
  return (
    <>
      <Head>
        <title>구구단 게임</title>
      </Head>
      <TimesTablesMain />
      <MainSection />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
export default TimesTables;

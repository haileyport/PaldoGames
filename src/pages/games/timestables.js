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
export default TimesTables;

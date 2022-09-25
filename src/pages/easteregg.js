import Head from "next/head";

import { Footer } from "../components";
import FooterEasteregg from "../EasterEgg/FooterEasteregg";

const EasterEgg = () => {
  return (
    <>
      <Head>
        <title>커뮤니티공간</title>
        <meta name="description" content="커뮤니티" />
      </Head>
      <FooterEasteregg />
    </>
  );
};

export default EasterEgg;

import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;

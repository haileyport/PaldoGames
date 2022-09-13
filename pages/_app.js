import '../src/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;

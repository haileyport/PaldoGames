import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Layout_box = styled.div`
  background-color: #1e293b;
`;

export default function Layout({ children }) {
  return (
    <Layout_box>
      <Header />
      <div>{children}</div>
      <Footer />
    </Layout_box>
  );
}

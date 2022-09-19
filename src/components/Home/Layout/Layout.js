import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import StyledLayout from "./Layout.style";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

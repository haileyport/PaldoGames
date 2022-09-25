import { useTheme } from "next-themes";
import * as Styled from "./DarkMode.style";

export const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Styled.DarkModeButton type='button' onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </>
  );
};

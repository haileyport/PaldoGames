import { useTheme } from 'next-themes';
import { DarkModeButton } from './DarkMode.style';

export const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <DarkModeButton type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    </>
  );
};

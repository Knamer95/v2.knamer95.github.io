import { ReactNode, useEffect } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';

interface DokaProviderProps {
  children: ReactNode;
}

const MantineProviderWrapper = (props: DokaProviderProps) => {
  const { children } = props;
  const preferredColorScheme = useColorScheme('dark');

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  useEffect(() => {
    if (colorScheme !== preferredColorScheme) setColorScheme(preferredColorScheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferredColorScheme]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme: colorScheme, primaryColor: 'pink' }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default MantineProviderWrapper;

import { Box, MantineTheme, Paper, ScrollArea } from '@mantine/core';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { DokaFooter, DokaHeader /* DokaNavbar */ } from '@/components/common';
import MantineProviderWrapper from '@/context/MantineProviderWrapper';
import { appRoutes } from '@/routes';
import './index.css';

const App = () => {
  return (
    <MantineProviderWrapper>
      <HashRouter>
        <Paper
          sx={(theme: MantineTheme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          })}
        >
          <DokaHeader height={57} p="xs" />
          <ScrollArea
            sx={{
              height: 'calc(100vh - var(--mantine-header-height) + 10px)',
              zIndex: 10,
            }}
            type="auto"
          >
            {/* - var(--mantine-footer-height) - 116px */}
            <Box
              sx={{
                minHeight: 'calc(100vh - var(--mantine-header-height))',
                display: 'grid',
                gridTemplateRows: '1fr auto',
              }}
            >
              <Routes>
                {appRoutes.map(({ path, component: Component }) => (
                  <Route key={path} path={path} element={<Component />}></Route>
                ))}
              </Routes>
              <DokaFooter height={'auto' as const} />
            </Box>
          </ScrollArea>
        </Paper>
      </HashRouter>
    </MantineProviderWrapper>
  );
};

export default App;

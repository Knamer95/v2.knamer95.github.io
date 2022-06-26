import DokaProvider from './context/DokaProvider';
import { AppShell, Box, MantineTheme, Paper, ScrollArea } from '@mantine/core';
import { HashRouter, Route, Routes } from 'react-router-dom';

import DokaFooter from './components/DokaFooter';
import DokaHeader from './components/DokaHeader';
// import Navbar from './components/DokaNavbar';
import { appRoutes } from './routes';
import './index.css';

const App = () => {
  return (
    <DokaProvider>
      <HashRouter>
        <Paper
          sx={(theme: MantineTheme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          })}
        >
          {/* <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}> */}
          <DokaHeader height={57} p="xs" />
          <ScrollArea
            sx={{
              height: 'calc(100vh - var(--mantine-header-height) + 10px)',
              zIndex: 10,
            }}
            type="auto"
          >
            {/* - var(--mantine-footer-height)     - 116px */}
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
          {/* </Box> */}
        </Paper>

        {/* <AppShell
          padding={0}
          // navbar={<Navbar width={{ base: 300 }} height={500} p="xs" />}
          header={<DokaHeader height={57} p="xs" />}
          footer={<DokaFooter height={150} />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          <ScrollArea
            sx={{
              height: 'calc(100vh - var(--mantine-header-height))',
            }}
          >
            <Routes>
              {appRoutes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />}></Route>
              ))}
            </Routes>
          </ScrollArea>
        </AppShell> */}
      </HashRouter>
    </DokaProvider>
  );
};

export default App;

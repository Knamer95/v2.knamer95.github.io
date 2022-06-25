import About from './pages/About';
import DokaProvider from './context/DokaProvider';
import { AppShell, ScrollArea } from '@mantine/core';
import Navbar from './components/DokaNavbar';
import DokaHeader from './components/DokaHeader';
import { HashRouter } from 'react-router-dom';
import i18n from '../i18n';

const App = () => {
  const changeLanguage = (lng: 'en-EN' | 'esES') => {
    i18n.changeLanguage(lng);
  };

  return (
    <DokaProvider>
      <HashRouter>
        <AppShell
          padding={0}
          // navbar={<Navbar width={{ base: 300 }} height={500} p="xs" />}
          header={<DokaHeader height="auto" p="xs" />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}>
          <ScrollArea>
            <About />
          </ScrollArea>
        </AppShell>
      </HashRouter>
    </DokaProvider>
  );
};

export default App;

import { memo } from 'react';

import { useTranslate } from '../hooks/useTranslate';
import {
  Box,
  Button,
  Group,
  Header,
  HeaderProps,
  Image,
  Menu,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { NavItem } from '@/types/navbar';
import { FrontRoutes } from '@/routes';
import { faHome, faEnvelope, faGlobe, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { flagEN, flagES } from '@/logic/flags';
import { useUpdateLanguage } from '@/hooks/useUpdateLanguage';

interface DokaHeaderProps {
  height: string | number;
}

const DokaHeader = memo((props: DokaHeaderProps & Partial<HeaderProps>) => {
  const t = useTranslate('navbar');
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const { currentLanguage, updateLanguage } = useUpdateLanguage();

  type HeaderItem = Required<Pick<NavItem, 'label' | 'to' | 'icon'>>;
  const headerItems: HeaderItem[] = [
    {
      label: t('home'),
      to: FrontRoutes.home,
      icon: faHome,
    },
    {
      label: t('about'),
      to: FrontRoutes.about,
      icon: faHome,
    },
    {
      label: t('projects'),
      to: FrontRoutes.projects,
      icon: faReact,
    },
    {
      label: t('contact'),
      to: FrontRoutes.contact,
      icon: faEnvelope,
    },
  ];

  const flags = [
    {
      label: t('english'),
      lang: 'en' as const,
      icon: flagEN,
    },
    {
      label: t('spanish'),
      lang: 'es' as const,
      icon: flagES,
    },
  ];

  const childrenProps = {
    header: {
      sx: {
        padding: '10px 40px!important',
      },
    },
    tabs: {
      value: tabValue,
      styles: {
        // root: { display: 'inline-block' },
        tabsList: { borderBottomColor: 'transparent !important' },
      },
    },
    getTab: ({ to, icon }: HeaderItem) => ({
      value: to,
      icon: <FontAwesomeIcon icon={icon} />,
      sx: { padding: '10px 20px' },
    }),
    button: {
      styles: {
        root: {
          display: 'inline-block',
          paddingLeft: 12,
          paddingRight: 12,
        },
      },
      color: 'gray',
    },
  };

  return (
    <Header {...props} {...childrenProps.header}>
      <Group sx={{ justifyContent: 'space-between' }}>
        <Title order={4}>
          <Text color="pink" sx={{ display: 'inline' }}>
            @{' '}
          </Text>
          Knamer95
        </Title>
        <Box sx={{ display: 'flex', gap: 10 }}>
          <Tabs
            defaultValue={FrontRoutes.home}
            color="pink"
            onTabChange={(to: FrontRoutes) => {
              console.log(to);
              navigate(to);
            }}
            {...childrenProps.tabs}
          >
            <Tabs.List position="right">
              {headerItems.map((item) => (
                <Tabs.Tab key={item.label} {...childrenProps.getTab(item)}>
                  {item.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          <Menu position="bottom-end" onChange={(val) => console.log('--val', val)}>
            <Menu.Target>
              <Button variant="light" {...childrenProps.button}>
                <FontAwesomeIcon icon={faGlobe} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              {flags.map(({ label, lang, icon }) => (
                <Menu.Item
                  key={label}
                  icon={<Image width={15} src={icon} />}
                  onClick={() => updateLanguage(lang)}
                  sx={{
                    // borderLeft: `3px solid ${
                    //   currentLanguage === lang
                    //     ? theme.fn.rgba(theme.colors.blue[colorScheme === 'light' ? 2 : 9], 0.8)
                    //     : 'transparent'
                    // }`,
                    ...(currentLanguage === lang && {
                      borderRadius: 0,
                      cursor: 'default',
                      pointerEvents: 'none',
                      background: theme.fn.rgba(theme.colors.blue[colorScheme === 'light' ? 2 : 9], 0.2)
                    }),
                  }}
                >
                  {label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <Button variant="light" onClick={() => toggleColorScheme()} {...childrenProps.button}>
            <FontAwesomeIcon icon={colorScheme === 'light' ? faMoon : faSun} />
          </Button>
        </Box>
      </Group>
    </Header>
  );
});

export default DokaHeader;

// TODO - Change selected tab on navigation change

import { memo, useRef } from 'react';
import {
  Box,
  Divider,
  Group,
  Header,
  HeaderProps,
  Image,
  Menu,
  Space,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faEnvelope,
  faGlobe,
  faMoon,
  faSun,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { DokaButton, DokaTooltip } from '@/components/mantine';
import { useTranslate, useUpdateLanguage } from '@/hooks';
import { flagEN, flagES } from '@/logic';
import { FrontRoutes } from '@/routes';
import { NavItem } from '@/types';

interface DokaHeaderProps {
  height: string | number;
}

const DokaHeader = memo((props: DokaHeaderProps & Partial<HeaderProps>) => {
  const t = useTranslate('navbar');
  const navigate = useNavigate();
  const location = useLocation();
  const { tabValue } = useParams();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { currentLanguage, updateLanguage } = useUpdateLanguage();

  type HeaderItem = Required<Pick<NavItem, 'label' | 'to' | 'icon' | 'ref'>>;
  const headerItems: HeaderItem[] = [
    {
      label: t('home'),
      to: FrontRoutes.home,
      icon: faHome,
      ref: useRef(),
    },
    {
      label: t('about'),
      to: FrontRoutes.about,
      icon: faAddressCard,
      ref: useRef(),
    },
    {
      label: t('projects'),
      to: FrontRoutes.projects,
      icon: faReact,
      ref: useRef(),
    },
    {
      label: t('contact'),
      to: FrontRoutes.contact,
      icon: faEnvelope,
      ref: useRef(),
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
        padding: '10px 60px!important',
        userSelect: 'none' as const,
      },
    },
    tabs: {
      value: tabValue,
      styles: {
        // root: { display: 'inline-block' },
        tabsList: { borderBottomColor: 'transparent !important' },
      },
    },
    getTab: ({ to, icon: _icon }: HeaderItem) => ({
      value: to,
      // icon: <FontAwesomeIcon icon={icon} />,
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
    },
  };

  return (
    <Header {...props} {...childrenProps.header}>
      <Group sx={{ justifyContent: 'space-between' }}>
        <Title order={4} sx={{ display: 'flex' }}>
          <Text
            color={theme.primaryColor}
            sx={{ display: 'flex', alignItems: 'center', fontSize: 33, lineHeight: 0 }}
          >
            @&nbsp;
          </Text>
          Knamer95
        </Title>
        <Group sx={{ gap: 10 }}>
          <Tabs
            defaultValue={location.pathname}
            // onTabChange={(to: FrontRoutes) => navigate(to)}
            {...childrenProps.tabs}
          >
            <Tabs.List position="right">
              {headerItems.map((item) => (
                <Tabs.Tab
                  key={item.label}
                  {...childrenProps.getTab(item)}
                  onClick={() => item.to !== location.pathname && navigate(item.to)}
                >
                  {item.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          <Space w={5} />
          <Divider orientation="vertical" />
          <Space w={5} />

          <Menu position="bottom-end">
            <Menu.Target>
              <DokaButton
                color="gray"
                hoverColor={theme.primaryColor}
                variant="light"
                {...childrenProps.button}
              >
                <FontAwesomeIcon icon={faGlobe} />
                <Text sx={{ display: 'inline-block', fontFamily: 'monospace' }}>
                  &nbsp;
                  {(currentLanguage || 'en')?.toUpperCase()}
                </Text>
              </DokaButton>
            </Menu.Target>
            <Menu.Dropdown>
              {flags.map(({ label, lang, icon }) => (
                <Menu.Item
                  key={label}
                  icon={<Image width={15} src={icon} />}
                  onClick={() => updateLanguage(lang)}
                  sx={{
                    ...(currentLanguage === lang && {
                      background: `${theme.fn.rgba(
                        theme.colors[theme.primaryColor][colorScheme === 'light' ? 3 : 9],
                        0.2,
                      )} !important`,
                    }),
                  }}
                >
                  {label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <DokaTooltip
            label={t('swapTo', { colorScheme: t(theme.colorScheme === 'dark' ? 'light' : 'dark') })}
            color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
            withArrow
          >
            <DokaButton
              color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
              variant="light"
              onClick={() => toggleColorScheme()}
              {...childrenProps.button}
            >
              <FontAwesomeIcon icon={colorScheme === 'light' ? faMoon : faSun} />
            </DokaButton>
          </DokaTooltip>
        </Group>
      </Group>
    </Header>
  );
});

export default DokaHeader;

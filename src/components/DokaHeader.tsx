import { memo } from 'react';

import { useTranslate } from '../hooks/useTranslate';
import { Group, Header, HeaderProps, Tabs, Text, Title } from '@mantine/core';
import { NavItem } from '@/types/navbar';
import { FrontRoutes } from '@/routes';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';

interface DokaHeaderProps {
  height: string | number;
}

const DokaHeader = memo((props: DokaHeaderProps & Partial<HeaderProps>) => {
  const t = useTranslate('navbar');
  const navigate = useNavigate();
  const { tabValue } = useParams();

  type HeaderItem = Required<Pick<NavItem, 'label' | 'to' | 'icon'>>;
  const headerItems: HeaderItem[] = [
    {
      label: t('about'),
      to: FrontRoutes.about,
      icon: faHome,
    },
    {
      label: t('skills'),
      to: FrontRoutes.skills,
      icon: faJsSquare,
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

  const childrenProps = {
    header: {
      sx: {
        padding: '10px 40px!important',
      },
    },
    tabs: {
      value: tabValue,
      styles: {
        // root: { justifyContent: 'end' },
        tabsListWrapper: { borderBottomColor: 'transparent !important' },
      },
    },
    getTab: ({ to, icon }: HeaderItem) => ({
      value: to,
      icon: <FontAwesomeIcon icon={icon} />,
      sx: { padding: '10px 20px' },
    }),
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
        <Tabs
          defaultValue={FrontRoutes.about}
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
      </Group>
    </Header>
  );
});

export default DokaHeader;

import { memo, useState } from 'react';
import { Anchor, Box, Collapse, Navbar, NavbarProps } from '@mantine/core';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { useTranslate } from '@/hooks';
import { FrontRoutes } from '@/routes';
import { NavItem } from '@/types';

const DokaNavbar = memo((props: Partial<NavbarProps>) => {
  const t = useTranslate('navbar');

  const navItems: NavItem[] = [
    {
      label: t('about'),
      alias: 'about',
      to: FrontRoutes.about,
      icon: faHome /* root: true */,
    },
    {
      label: t('skills'),
      alias: 'skills',
      to: FrontRoutes.skills,
      icon: faJsSquare,
    },
    {
      label: t('projects'),
      alias: 'toggleProjects',
      icon: faReact,
      children: [
        {
          label: t('myProjects'),
          alias: 'projects',
          to: FrontRoutes.projects,
        },
        {
          label: t('collabs'),
          alias: 'collabs',
          to: FrontRoutes.collabs,
        },
      ],
    },
    {
      label: t('contact'),
      alias: 'contact',
      to: FrontRoutes.contact,
      icon: faEnvelope,
    },
  ];

  const navProps = {
    sx: {
      userSelect: 'none' as const,
    },
  };

  return (
    <Navbar {...props} {...navProps}>
      <Navbar.Section grow mt="md">
        {navItems.map((item) => (
          <DokaNavItem key={item.alias} {...item} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
});

const DokaNavItem = (props: NavItem) => {
  const { alias, icon, label, to, children } = props;

  const [opened, setOpened] = useState(false);

  return (
    <>
      {to ? (
        <Box>
          <Anchor key={alias} to={to} component={Link}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
          </Anchor>
        </Box>
      ) : children ? (
        <>
          <Box onClick={() => setOpened(!opened)}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
          </Box>
          <Collapse in={opened}>
            {children.map((item) => (
              <DokaNavItem key={item.alias} {...item} />
            ))}
          </Collapse>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DokaNavbar;

import { Anchor, useMantineTheme } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => {
  const theme = useMantineTheme();
  const { colorScheme } = theme;

  const links = [
    {
      icon: faGithub,
      href: 'https://github.com/Knamer95',
    },
    {
      icon: faLinkedin,
      href: 'https://es.linkedin.com/in/marcos-p%C3%A1ez-calder%C3%B3n-231ab9187',
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/marken_95',
    },
    {
      icon: faEnvelope,
      href: 'mailto:ognao7@gmail.com',
    },
  ];

  return (
    <>
      {links.map(({ icon, href }) => (
        <Anchor
          key={href}
          href={href}
          sx={{
            fontSize: 'inherit',
            color: 'inherit',
            transition: 'color 0s !important',
            '&:hover': {
              color: `${theme.fn.rgba(
                theme.colors.pink[colorScheme === 'light' ? 5 : 7],
                0.7,
              )} !important`,
            },
          }}
        >
          <FontAwesomeIcon icon={icon} />
        </Anchor>
      ))}
    </>
  );
};

export default SocialLinks;

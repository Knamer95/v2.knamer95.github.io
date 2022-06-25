import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks/useTranslate';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Box, Image, Text } from '@mantine/core';
import { memo } from 'react';

const About = memo(() => {
  // console.log('About loaded');
  const t = useTranslate('contact');

  document.title = t('title');

  return (
    <>
      <DokaCard>
        <DokaCardHeader>{t('title')}</DokaCardHeader>
        <DokaCardBody>
          <Box>
            <Text>
              {t('findMe')}&nbsp;
              <Anchor href="https://github.com/Knamer95">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </Anchor>
              .
            </Text>

            <Text>
              {t('contactMe')}&nbsp;
              <Anchor href="mailto:ognao7@gmail.com">ognao7@gmail.com</Anchor>.
            </Text>

            <Text>
              {t('webInfo')}&nbsp;
              <Anchor href="https://github.com/Knamer95/react-knamer-web">React Knamer Web</Anchor>.
            </Text>
          </Box>
          {/* <Box>
            <Image src={aboutMe} title="About me" alt={t('about_me_alt')} width={20} />
          </Box> */}
        </DokaCardBody>
      </DokaCard>
    </>
  );
});

export default About;

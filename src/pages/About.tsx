import { memo } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, Box, Text } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const About = memo(() => {
  const t = useTranslate('contact');
  useDocumentTitle(t('title'));

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

          {Array.from({ length: 40 }).map((_, index) => (
            <Box key={`fill-text-${index}`}>Fill text to remove</Box>
          ))}

          {/* <Box>
            <Image src={aboutMe} title="About me" alt={t('about_me_alt')} width={20} />
          </Box> */}
        </DokaCardBody>
      </DokaCard>
    </>
  );
});

export default About;

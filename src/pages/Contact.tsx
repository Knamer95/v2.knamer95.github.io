import { memo } from 'react';
import { Box, Center, Grid, Group, Image, Space, Text } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { Trans } from 'react-i18next';

import ContactMeImage from '@/assets/misc/contact-scaled.png';
import { SocialLinks } from '@/components/common';
import { DokaButton, DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';
import { DokaAnchor } from '@/components/mantine/DokaAnchor';

const Contact = memo(() => {
  const t = useTranslate('contact');
  useDocumentTitle(t('title'));

  const childrenProps = {
    button: {
      color: 'pink' as const,
      variant: 'light' as const,
      compact: true,
      component: 'a' as const,
      target: '_blank',
    },
    anchor: {
      color: 'pink' as const,
    },
    image: {
      styles: {
        //
      },
    },
  };

  return (
    <>
      <Grid>
        <Grid.Col span={7}>
          <DokaCard>
            <DokaCardHeader>{t('title')}</DokaCardHeader>
            <DokaCardBody>
              <Box>
                <Text>{t('p1')}</Text>

                <Space h={30} />

                <Text>{t('p2')}</Text>

                <Space h={30} />

                <Text>
                  <Trans
                    components={{
                      RepoAnchor: (
                        <DokaAnchor
                          href="https://github.com/Knamer95/react-knamer-web"
                          {...childrenProps.anchor}
                        />
                      ),
                    }}
                  >
                    {t('p3')}
                  </Trans>
                </Text>

                <Text>
                  <Trans
                    components={{
                      ReactAnchor: (
                        <DokaButton href="https://beta.reactjs.org/" {...childrenProps.button} />
                      ),
                      TypeScriptAnchor: (
                        <DokaButton
                          href="https://www.typescriptlang.org/"
                          {...childrenProps.button}
                        />
                      ),
                      ViteAnchor: (
                        <DokaButton href="https://vitejs.dev/" {...childrenProps.button} />
                      ),
                      MantineAnchor: (
                        <DokaButton href="https://mantine.dev/" {...childrenProps.button} />
                      ),
                    }}
                  >
                    {t('p4')}
                  </Trans>
                </Text>
              </Box>

              <Space h={30} />

              <Group spacing="xs" sx={{ fontSize: 20 }}>
                <SocialLinks />
              </Group>

              {/* <Space h={30} />

          {Array.from({ length: 40 }).map((_, index) => (
            <Box key={`fill-text-${index}`}>Fill text to remove</Box>
          ))} */}
            </DokaCardBody>
          </DokaCard>
        </Grid.Col>
        <Grid.Col span={5}>
          <DokaCard>
            <Box sx={{ position: 'relative' }}>
              <Image src={ContactMeImage} alt="Contact me image" {...childrenProps.image} />
            </Box>
          </DokaCard>
        </Grid.Col>
      </Grid>
    </>
  );
});

export default Contact;

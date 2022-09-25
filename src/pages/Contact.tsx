import { memo } from 'react';
import { Box, Grid, Group, Image, Space, Text, useMantineTheme } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { Trans } from 'react-i18next';

import ContactMeImage from '@/assets/misc/contact-scaled.png';
import { SocialLinks } from '@/components/common';
import { DokaAnchor, DokaButton, DokaCard } from '@/components/mantine';
import { DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const Contact = memo(() => {
  const t = useTranslate('contact');
  const theme = useMantineTheme();
  useDocumentTitle(t('title'));

  const childrenProps = {
    button: {
      color: theme.primaryColor,
      variant: 'light' as const,
      compact: true,
      component: 'a' as const,
      target: '_blank',
    },
    anchor: {
      color: theme.primaryColor,
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

import { memo } from 'react';
import { Anchor, Box, Group, Space, Text } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { Trans } from 'react-i18next';

import { SocialLinks } from '@/components/common';
import { DokaButton, DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const Contact = memo(() => {
  const t = useTranslate('contact');
  useDocumentTitle(t('title'));

  const childrenProps = {
    button: {
      color: 'pink' as const,
      variant: 'light' as const,
      compact: true,
      component: 'a',
      target: '_blank',
    },
  };

  return (
    <>
      <DokaCard>
        <DokaCardHeader>{t('title')}</DokaCardHeader>
        <DokaCardBody>
          <Box sx={{ maxWidth: 1000 }}>
            <Text>{t('p1')}</Text>

            <Space h={30} />

            <Text>
              <Trans
                components={{
                  RepoAnchor: <Anchor href="https://github.com/Knamer95/react-knamer-web" />,
                }}
              >
                {t('p2')}
              </Trans>
            </Text>

            <Text>
              <Trans
                components={{
                  ReactAnchor: (
                    <DokaButton href="https://beta.reactjs.org/" {...childrenProps.button} />
                  ),
                  TypeScriptAnchor: (
                    <DokaButton href="https://www.typescriptlang.org/" {...childrenProps.button} />
                  ),
                  ViteAnchor: <DokaButton href="https://vitejs.dev/" {...childrenProps.button} />,
                  MantineAnchor: (
                    <DokaButton href="https://mantine.dev/" {...childrenProps.button} />
                  ),
                }}
              >
                {t('p3')}
              </Trans>
            </Text>

            <Space h={30} />

            <Text>{t('p4')}</Text>
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
    </>
  );
});

export default Contact;

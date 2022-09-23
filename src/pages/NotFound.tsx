import { memo } from 'react';
import { BackgroundImage, Box, Grid, Image, Space, Text, useMantineTheme } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import NotFoundImage from '@/assets/misc/not-found.png';
import { DokaButton, DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const NotFound = memo(() => {
  const t = useTranslate('notFound');
  const theme = useMantineTheme();
  useDocumentTitle(t('title'));

  const childrenProps = {
    button: {
      color: theme.primaryColor,
      variant: 'light' as const,
      component: 'a' as const,
      target: '_blank',
    },
    image: {
      styles: {
        image: {
          padding: '0 10% 10% 10%',
        },
      },
    },
  };

  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <DokaCard>
            <DokaCardHeader>{t('title')}</DokaCardHeader>
            <DokaCardBody>
              <Box>
                <Text>{t('body')}&nbsp;</Text>
                <Space h={20} />
                <DokaButton href="/home" {...childrenProps.button}>
                  {t('takeMeHome')}
                </DokaButton>
              </Box>
            </DokaCardBody>
          </DokaCard>
        </Grid.Col>

        <Grid.Col span={4}>
          <DokaCard>
            <Image src={NotFoundImage} {...childrenProps.image} />
          </DokaCard>
        </Grid.Col>
      </Grid>
    </>
  );
});

export default NotFound;

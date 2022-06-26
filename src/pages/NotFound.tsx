import { memo } from 'react';
import { Box, Text } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const NotFound = memo(() => {
  const t = useTranslate('notFound');
  useDocumentTitle(t('title'));

  return (
    <>
      <DokaCard>
        <DokaCardHeader>{t('title')}</DokaCardHeader>
        <DokaCardBody>
          <Box>
            <Text>{t('body')}&nbsp;</Text>
          </Box>
        </DokaCardBody>
      </DokaCard>
    </>
  );
});

export default NotFound;

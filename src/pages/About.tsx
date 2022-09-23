import { memo } from 'react';
import { useDocumentTitle } from '@mantine/hooks';

import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import { useTranslate } from '@/hooks';

const About = memo(() => {
  const t = useTranslate('about');
  useDocumentTitle(t('title'));

  return (
    <>
      <DokaCard>
        <DokaCardHeader>{t('title')}</DokaCardHeader>
        <DokaCardBody>:)</DokaCardBody>
      </DokaCard>
    </>
  );
});

export default About;

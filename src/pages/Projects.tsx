import { memo } from 'react';
import { useDocumentTitle } from '@mantine/hooks';

import { useTranslate } from '@/hooks';
import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';

const Projects = memo(() => {
  const t = useTranslate('projects');
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

export default Projects;

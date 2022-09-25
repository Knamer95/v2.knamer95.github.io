import { memo } from 'react';
import { Grid } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import MoonArtCover from '@/assets/projects/moonart/moonart_cover.png';
import KuroeCover from '@/assets/projects/kuroe/kuroe_cover.png';
import { DokaCard, DokaCardBody, DokaCardHeader } from '@/components/mantine';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslate } from '@/hooks';
import { ProjectCardInfo } from '@/types/project';

const Projects = memo(() => {
  const t = useTranslate('projects');
  useDocumentTitle(t('title'));

  const projects: ProjectCardInfo[] = [
    {
      key: 'moonart',
      name: 'MoonArt',
      tags: [
        { color: 'red', value: 'Angular' },
        { color: 'green', value: 'Symfony' },
        { color: 'blue', value: 'MySQL' },
        { color: 'yellow', value: 'Doctrine' },
      ],
      shortDescription: `${t('moonart.p1')}.\n${t('moonart.p2')}.`,
      previewImage: MoonArtCover,
      href: '/projects/moonart',
    },
    {
      key: 'kuroe',
      name: 'Kuroe',
      tags: [
        { color: 'blue', value: 'React' },
        { color: 'yellow', value: 'ExpressJS' },
        { color: 'gray', value: 'Socket.io' },
        { color: 'cyan', value: 'Mantine' },
        { color: 'green', value: 'MongoDB' },
      ],
      shortDescription: `${t('kuroe.p1')}.\n${t('kuroe.p2')}.`,
      previewImage: KuroeCover,
      href: '/projects/kuroe',
    },
  ];

  const tagsToDisplay = 2;

  return (
    <>
      <DokaCard>
        <DokaCardHeader>{t('title')}</DokaCardHeader>
        <DokaCardBody>
          <Grid sx={{ gap: 30 }}>
            {projects.map((project) => (
              <Grid.Col key={project.key} span={3}>
                <ProjectCard project={project} tagsToDisplay={tagsToDisplay} />
              </Grid.Col>
            ))}
          </Grid>
        </DokaCardBody>
      </DokaCard>
    </>
  );
});

export default Projects;

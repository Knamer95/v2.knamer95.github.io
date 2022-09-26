import { BackgroundImage, Badge, Box, Group, Space, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

import { DokaAnchor, DokaTooltip } from '@/components/mantine';
import { useTranslate } from '@/hooks';
import { ProjectCardInfo } from '@/types/project';
import { useStyles } from './ProjectCard.styles';

interface ProjectCardProps {
  tagsToDisplay?: number;
  project: ProjectCardInfo;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { tagsToDisplay = 2, project } = props;
  const t = useTranslate('projects');
  const { classes } = useStyles();

  return (
    <BackgroundImage src={project.previewImage}>
      <Box className={classes.container}>
        <Space h={200} />
        <Box className={classes.body}>
          <Title order={4}>{project.name}</Title>
          <Space h={8} />
          <Group spacing="xs">
            {project.tags.slice(0, tagsToDisplay).map((tag, tagIndex) => (
              <Badge key={tagIndex} color={tag.color}>
                {tag.value}
              </Badge>
            ))}
            {project.tags.length > tagsToDisplay && (
              <DokaTooltip
                color="gray"
                position="right"
                withArrow
                label={
                  <Stack spacing="xs">
                    {project.tags.slice(tagsToDisplay).map((tag, tagIndex) => (
                      <Text key={tagIndex}>{tag.value}</Text>
                    ))}
                  </Stack>
                }
              >
                <Badge className={classes.secondaryBadge}>{`+ ${
                  project.tags.length - tagsToDisplay
                } tags`}</Badge>
              </DokaTooltip>
            )}
          </Group>
          <Space h={15} />
          <Text size="sm" className={classes.info}>
            {project.shortDescription}
          </Text>
          <Space h={15} />
          <DokaAnchor color="blue" component={Link} href={project.href}>
            {t('viewMore')}
          </DokaAnchor>
        </Box>
      </Box>
    </BackgroundImage>
  );
};

export default ProjectCard;

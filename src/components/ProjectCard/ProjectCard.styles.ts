import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    overflow: 'visible',
    borderRadius: 5,
  },
  body: {
    padding: 20,
    background: theme.fn.rgba(theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 2], 0.95),
  },
  secondaryBadge: {
    cursor: 'pointer',
    color: theme.colors.gray[theme.colorScheme === 'dark' ? 4 : 7],
    background: theme.fn.rgba(theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 5], 0.5),
  },
  info: {
    whiteSpace: 'pre-wrap',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
  },
  anchor: {
    color: theme.colors.blue[theme.colorScheme === 'dark' ? 1 : 8],
  },
}));

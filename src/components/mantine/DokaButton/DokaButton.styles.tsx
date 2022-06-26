import { createStyles, CSSObject } from '@mantine/core';

export const useStyles = createStyles((theme, styles: Record<string, CSSObject>) => ({
  root: {
    '&:hover': {
      background: theme.fn.rgba(theme.colors.pink[theme.colorScheme === 'dark' ? 9 : 3], 0.5),
    },
    ...styles?.root,
  },
}));

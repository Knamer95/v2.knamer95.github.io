import { createStyles, CSSObject } from '@mantine/core';

export const useStyles = createStyles((_theme, styles: Record<string, CSSObject>) => ({
  root: {
    padding: '40px 60px',
    background: 'inherit',
    ...styles?.root,
  },
}));

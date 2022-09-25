import { createStyles, CSSObject } from '@mantine/core';

export const useStyles = createStyles((_theme, styles: Record<string, CSSObject>) => ({
  root: {
    padding: '40px 5%',
    background: 'inherit',
    ...styles?.root,
  },
}));

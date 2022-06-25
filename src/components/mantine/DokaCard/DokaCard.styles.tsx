import { createStyles, CSSObject } from '@mantine/core';

export const useStyles = createStyles((theme, styles: Record<string, CSSObject>) => ({
  root: {
    padding: '20px 40px',
    background: 'inherit',
    ...styles?.root,
  },
}));

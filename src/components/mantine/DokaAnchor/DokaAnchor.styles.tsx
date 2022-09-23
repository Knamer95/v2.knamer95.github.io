import { createStyles, CSSObject, DefaultMantineColor } from '@mantine/core';

interface StylesOptions {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  hoverColor: DefaultMantineColor;
}

export const useStyles = createStyles((theme, { styles = {}, hoverColor }: StylesOptions) => ({
  root: {
    '&:hover': {
      color: theme.fn.rgba(theme.colors[hoverColor][theme.colorScheme === 'dark' ? 3 : 9], 0.8),
    },
    ...styles?.root,
  },
}));

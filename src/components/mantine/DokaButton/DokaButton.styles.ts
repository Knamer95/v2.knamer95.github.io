import { createStyles, CSSObject, DefaultMantineColor } from '@mantine/core';

interface StylesOptions {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  hoverColor: DefaultMantineColor;
}

export const useStyles = createStyles(
  (theme, { styles = {}, noPadding, hoverColor }: StylesOptions) => ({
    root: {
      ...(noPadding && { padding: '0 5px', height: 26 }),
      '&:hover': {
        background: theme.fn.rgba(
          theme.colors[hoverColor][theme.colorScheme === 'dark' ? 9 : 2],
          0.5,
        ),
        color: theme.fn.rgba(theme.colors[hoverColor][theme.colorScheme === 'dark' ? 1 : 9], 0.8),
      },
      ...styles?.root,
    },
  }),
);

import { createStyles, CSSObject, DefaultMantineColor } from '@mantine/core';

interface StylesOptions {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  hoverColor: DefaultMantineColor;
  color: DefaultMantineColor;
}

export const useStyles = createStyles(
  (theme, { styles = {}, noPadding, color, hoverColor }: StylesOptions) => ({
    root: {
      ...(noPadding && { padding: '0 5px', height: 26 }),
      color: theme.colors[color][theme.colorScheme === 'dark' ? 1 : 9],
      background: theme.fn.rgba(theme.colors[color][theme.colorScheme === 'dark' ? 9 : 2], 0.1),
      '&:hover': {
        background: theme.fn.rgba(
          theme.colors[hoverColor][theme.colorScheme === 'dark' ? 9 : 2],
          0.2,
        ),
        color: theme.fn.rgba(theme.colors[hoverColor][theme.colorScheme === 'dark' ? 1 : 9], 0.8),
      },
      ...styles?.root,
    },
  }),
);

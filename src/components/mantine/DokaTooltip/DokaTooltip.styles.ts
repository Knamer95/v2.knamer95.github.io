import { createStyles, CSSObject, DefaultMantineColor } from '@mantine/core';

interface StylesOptions {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  color: DefaultMantineColor;
}

export const useStyles = createStyles((theme, { styles = {}, color }: StylesOptions) => ({
  tooltip: {
    background: theme.fn.lighten(theme.colors[color][theme.colorScheme === 'dark' ? 3 : 9], 0.3),
    color: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 1],
    ...styles?.tooltip,
  },
}));

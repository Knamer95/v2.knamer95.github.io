import { createStyles, CSSObject, MantineTheme, TitleOrder } from '@mantine/core';

interface StylesOptions {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  size: MantineTheme['headings']['sizes'][`h${TitleOrder}`];
}

export const useStyles = createStyles(
  (theme, { styles, noPadding = false, size }: StylesOptions) => ({
    root: {
      paddingBottom: noPadding ? 0 : 40,
      ...(size as CSSObject),
      ...styles?.root,
    },
  }),
);

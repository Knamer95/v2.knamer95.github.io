import { Text, TextProps, TitleOrder, useMantineTheme } from '@mantine/core';

import { useStyles } from './DokaCardHeader.styles';

interface DokaCardHeaderProps {
  className?: string;
  order?: TitleOrder;
  noPadding?: boolean;
}

const DokaCardHeader = (props: DokaCardHeaderProps & TextProps) => {
  const { children, order = 1, noPadding, ...rest } = props;
  const theme = useMantineTheme();
  const size = theme.headings.sizes[`h${order}`];

  const { classes } = useStyles({ noPadding, size });

  const titleProps = {
    color: theme.primaryColor,
    className: classes.root,
    ...rest,
  };

  return <Text {...titleProps}>{children}</Text>;
};

export default DokaCardHeader;

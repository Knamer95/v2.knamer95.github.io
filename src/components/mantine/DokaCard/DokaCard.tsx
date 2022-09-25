import { CSSObject, Paper, PaperProps } from '@mantine/core';

import { useStyles } from './DokaCard.styles';

interface DokaCardProps {
  styles?: Record<string, CSSObject>;
  className?: string;
}

const DokaCard = (props: DokaCardProps & PaperProps) => {
  const { styles, className, children } = props;
  const { cx, classes } = useStyles(styles ?? {});

  return <Paper className={cx(classes.root, className)}>{children}</Paper>;
};

export default DokaCard;

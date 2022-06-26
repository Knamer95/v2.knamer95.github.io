import { CSSObject, Paper, PaperProps } from '@mantine/core';
import { useStyles } from './DokaCard.styles';

interface DokaCardProps {
  styles?: Record<string, CSSObject>;
  className?: string;
}

const DokaCard = (props: DokaCardProps & PaperProps) => {
  const { styles, children } = props;
  const { classes } = useStyles(styles ?? {});

  return <Paper className={classes.root}>{children}</Paper>;
};

export default DokaCard;

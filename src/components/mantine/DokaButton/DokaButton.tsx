import { Button, ButtonProps, CSSObject } from '@mantine/core';
import { forwardRef } from 'react';
import { useStyles } from './DokaButton.styles';

interface DokaButtonProps {
  styles?: Record<string, CSSObject>;
  className?: string;
  onClick?: () => void;
}

const DokaButton = forwardRef((props: DokaButtonProps & ButtonProps, ref) => {
  const { styles, children, ...rest } = props;
  const { classes } = useStyles(styles ?? {});

  return (
    <>
      <Button ref={ref} className={classes.root} {...rest}>
        {children}
      </Button>
    </>
  );
});

export default DokaButton;

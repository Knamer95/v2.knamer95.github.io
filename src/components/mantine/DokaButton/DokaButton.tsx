import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps, CSSObject, DefaultMantineColor } from '@mantine/core';

import { useStyles } from './DokaButton.styles';

interface DokaButtonProps {
  styles?: Record<string, CSSObject>;
  noPadding?: boolean;
  className?: string;
  hoverColor?: DefaultMantineColor;
  onClick?: () => void;
  href?: string;
}

const DokaButton = forwardRef(
  (props: DokaButtonProps & ButtonProps, ref: ForwardedRef<HTMLButtonElement | null>) => {
    const { color = 'gray', styles, children, noPadding, hoverColor, className, ...rest } = props;
    const { cx, classes } = useStyles({ styles, noPadding, hoverColor: hoverColor ?? color });

    const buttonProps = {
      ...(ref && { ref }),
      color,
      ...rest,
    };

    return (
      <>
        <Button {...buttonProps} className={cx(classes.root, className)}>
          {children}
        </Button>
      </>
    );
  },
);

export default DokaButton;

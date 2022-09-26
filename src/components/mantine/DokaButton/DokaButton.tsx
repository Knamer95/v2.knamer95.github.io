import { ForwardedRef, forwardRef } from 'react';
import {
  Button,
  ButtonProps,
  CSSObject,
  DefaultMantineColor,
  useMantineTheme,
} from '@mantine/core';

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
    const theme = useMantineTheme();
    const {
      color = theme.primaryColor,
      styles,
      children,
      noPadding,
      hoverColor,
      className,
      ...rest
    } = props;
    const { cx, classes } = useStyles({
      styles,
      noPadding,
      hoverColor: hoverColor ?? color,
      color,
    });

    const buttonProps = {
      ...(ref && { ref }),
      ...rest,
    };

    return (
      <>
        <Button className={cx(classes.root, className)} {...buttonProps}>
          {children}
        </Button>
      </>
    );
  },
);

export default DokaButton;

import { ElementType } from 'react';
import {
  Anchor,
  AnchorProps,
  CSSObject,
  DefaultMantineColor,
  useMantineTheme,
} from '@mantine/core';

import { useStyles } from './DokaAnchor.styles';

interface DokaAnchorProps {
  styles?: Record<string, CSSObject>;
  className?: string;
  hoverColor?: DefaultMantineColor;
  href: string;
  component?: ElementType<any> | any;
}

const DokaAnchor = (props: DokaAnchorProps & AnchorProps) => {
  const theme = useMantineTheme();
  const { color = theme.primaryColor, styles, children, hoverColor, className, ...rest } = props;
  const { cx, classes } = useStyles({ styles, hoverColor: hoverColor ?? color });

  const anchorProps = {
    color,
    ...rest,
  };

  return (
    <>
      <Anchor {...anchorProps} className={cx(classes.root, className)}>
        {children}
      </Anchor>
    </>
  );
};

export default DokaAnchor;

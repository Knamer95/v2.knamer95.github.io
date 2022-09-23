import { Anchor, AnchorProps, CSSObject, DefaultMantineColor } from '@mantine/core';

import { useStyles } from './DokaAnchor.styles';

interface DokaAnchorProps {
  styles?: Record<string, CSSObject>;
  className?: string;
  hoverColor?: DefaultMantineColor;
  href: string;
}

const DokaAnchor = (props: DokaAnchorProps & AnchorProps) => {
  const { color = 'gray', styles, children, hoverColor, ...rest } = props;
  const { classes } = useStyles({ styles, hoverColor: hoverColor ?? color });

  const anchorProps = {
    color,
    ...rest,
  };

  return (
    <>
      <Anchor {...anchorProps} className={classes.root}>
        {children}
      </Anchor>
    </>
  );
};

export default DokaAnchor;

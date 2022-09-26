import { Tooltip, TooltipProps, CSSObject, useMantineTheme } from '@mantine/core';

import { useStyles } from './DokaTooltip.styles';

interface DokaTooltipProps {
  styles?: Record<string, CSSObject>;
  className?: string;
}

const DokaTooltip = (props: DokaTooltipProps & TooltipProps) => {
  const theme = useMantineTheme();
  const { color = theme.primaryColor, styles, radius = 'xs', children, className, ...rest } = props;
  const { classes } = useStyles({ styles, color });

  const tooltipProps = {
    radius,
    ...(className && { className }),
    ...rest,
  };

  return (
    <>
      <Tooltip classNames={{ tooltip: classes.tooltip, arrow: classes.tooltip }} {...tooltipProps}>
        {children}
      </Tooltip>
    </>
  );
};

export default DokaTooltip;

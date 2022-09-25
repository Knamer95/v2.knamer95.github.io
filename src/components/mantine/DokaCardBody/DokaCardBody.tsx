import { ReactNode } from 'react';
import { Box } from '@mantine/core';

interface DokaCardBodyProps {
  className?: string;
  children: ReactNode;
}

const DokaCardBody = (props: DokaCardBodyProps) => {
  const { className, children } = props;

  return <Box {...(className && { className })}>{children}</Box>;
};

export default DokaCardBody;

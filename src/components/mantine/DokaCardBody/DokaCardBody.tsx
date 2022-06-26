import { ReactNode } from 'react';
import { Box } from '@mantine/core';

interface DokaCardBodyProps {
  className?: string;
  children: ReactNode;
}

const DokaCardBody = (props: DokaCardBodyProps) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export default DokaCardBody;

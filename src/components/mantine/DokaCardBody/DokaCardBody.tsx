import { Box } from '@mantine/core';
import { ReactNode } from 'react';

interface DokaCardBodyProps {
  className?: string;
  children: ReactNode;
}

const DokaCardBody = (props: DokaCardBodyProps) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export default DokaCardBody;

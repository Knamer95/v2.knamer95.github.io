import { Title, TitleProps } from '@mantine/core';

interface DokaCardHeaderProps {
  className?: string;
}

const DokaCardHeader = (props: DokaCardHeaderProps & TitleProps) => {
  const { children, order = 1, ...rest } = props;

  const titleProps = {
    order,
    ...rest,
  };

  return <Title {...titleProps}>{children}</Title>;
};

export default DokaCardHeader;

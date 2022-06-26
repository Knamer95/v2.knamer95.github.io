// TODO - Change selected tab on navigation change

import { memo } from 'react';
import { Footer, FooterProps, Sx } from '@mantine/core';

interface DokaFooterProps {
    className?: string;
}

const DokaFooter = memo(
  (props: DokaFooterProps & Partial<FooterProps> & Pick<FooterProps, 'height'>) => {
    const childrenProps = {
      footer: {
        sx: {
          padding: '40px 5%!important',
          position: 'relative',
          zIndex: 0,
        } as Sx,
      },
    };

    return (
      <Footer {...props} {...childrenProps.footer}>
        Footer Copyright 2022 Knamer95. All rights reserved. Github Linkedin
      </Footer>
    );
  },
);

export default DokaFooter;

// TODO - Change selected tab on navigation change

import { memo } from 'react';
import { Box, Footer, FooterProps, Group, Sx, Text } from '@mantine/core';

import { SocialLinks } from '@/components/common';

interface DokaFooterProps {
  className?: string;
}

const DokaFooter = memo(
  (props: DokaFooterProps & Partial<FooterProps> & Pick<FooterProps, 'height'>) => {
    const childrenProps = {
      footer: {
        sx: {
          padding: '20px 5%!important',
          position: 'relative',
          zIndex: 0,
        } as Sx,
      },
    };

    return (
      <Footer {...props} {...childrenProps.footer}>
        <Group sx={{ justifyContent: 'space-between' }}>
          <Text>Copyright Ⓒ 2022 Knamer95. All rights reserved.</Text>
          <Box sx={{ fontSize: 22 }}>
            <Group>
              <SocialLinks />
            </Group>
          </Box>
        </Group>
      </Footer>
    );
  },
);

export default DokaFooter;

import { MantineColor } from '@mantine/core';

type Tag = { color: MantineColor; value: string };

export type ProjectCardInfo = {
  key: string;
  name: string;
  tags: Tag[];
  shortDescription: string;
  previewImage: string;
  href: string;
};

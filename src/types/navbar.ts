import { FrontRoutes } from '@/routes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MutableRefObject } from 'react';

export interface NavItem {
  label: string;
  alias?: string;
  to?: FrontRoutes;
  icon?: IconProp;
  ref?: MutableRefObject<'div' | undefined>;
  children?: NavItem[];
}

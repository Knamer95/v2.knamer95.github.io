import { MutableRefObject } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FrontRoutes } from '@/routes';

export interface NavItem {
  label: string;
  alias?: string;
  to?: FrontRoutes;
  icon?: IconProp;
  ref?: MutableRefObject<'div' | undefined>;
  children?: NavItem[];
}

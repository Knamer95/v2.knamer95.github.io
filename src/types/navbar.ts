import { FrontRoutes } from '@/routes';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MemoExoticComponent } from 'react';

export interface NavItem {
  label: string;
  alias?: string;
  to?: FrontRoutes;
  icon?: IconProp;
  children?: NavItem[];
}

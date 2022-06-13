import { DisplayDevices } from './displayDevices';
import { MenuItemType } from './menuItemType';

export interface InternalMenuItem {
  _id: string;
  display_name: string;
  display_on: DisplayDevices[];
  item_logo?: {
    url: string;
  };
  item_logo_active?: {
    url: string;
  };
  redirection_target?: {
    _codename: string;
    url_slug?: string;
  };
  _type: MenuItemType.internal;
}

export type InternalMenuItems = InternalMenuItem[];

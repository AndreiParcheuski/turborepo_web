import { MenuItemType } from './menuItemType';

export interface SocialMenuItem {
  _id: string;
  link_url: string;
  social_network_name: string;
  icon: {
    url: string;
  }[];
  _type: MenuItemType.social;
}

export type SocialMenuItems = SocialMenuItem[];

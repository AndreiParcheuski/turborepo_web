import { MenuItemType } from './menuItemType';

export interface ButtonMenuItem {
  _id: string;
  image: {
    url: string;
    width: number;
    height: number;
  }[];
  redirection_target: {
    _codename: string;
    display_name: string;
    redirection_url: string;
  }[];
  _type: MenuItemType.button;
}

export type ButtonMenuItems = ButtonMenuItem[];

import { InternalMenuItem } from './internalMenuItem';
import { MenuItemType } from './menuItemType';

export interface RelativeMenuItem {
  _id: string;
  menu_item: InternalMenuItem;
  parent_item: InternalMenuItem | RelativeMenuItem;
  _type: MenuItemType.relative;
}

export type RelativeMenuItems = RelativeMenuItem[];

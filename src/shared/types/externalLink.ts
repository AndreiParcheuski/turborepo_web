import { MenuItemType } from './menuItemType';

export interface ExternalLink {
  _id: string;
  display_name: string;
  redirection_url: string;
  _type: MenuItemType.external;
}

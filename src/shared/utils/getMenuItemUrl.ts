import { ButtonMenuItem } from '@/shared/types/buttonMenuItem';
import { ExternalLink } from '@/shared/types/externalLink';
import { InternalMenuItem } from '@/shared/types/internalMenuItem';
import { MenuItemType } from '@/shared/types/menuItemType';
import { RelativeMenuItem } from '@/shared/types/relativeMenuItem';
import { SocialMenuItem } from '@/shared/types/socialMenuItem';

import { getUrlSlug } from './getUrlSlug';

export const getMenuItemUrl = (
  urlStart: string,
  item:
    | InternalMenuItem
    | RelativeMenuItem
    | ExternalLink
    | SocialMenuItem
    | ButtonMenuItem
): string => {
  if (item._type === MenuItemType.external) {
    return item.redirection_url;
  }

  if (item._type === MenuItemType.button) {
    return item.redirection_target[0].redirection_url;
  }

  if (item._type === MenuItemType.social) {
    return item.link_url;
  }

  if (item._type === MenuItemType.relative) {
    const urlEnd = getUrlSlug(item.menu_item);

    return `${urlStart}${getMenuItemUrl('', item.parent_item)}${urlEnd}`;
  }

  return `${urlStart}${getUrlSlug(item)}`;
};

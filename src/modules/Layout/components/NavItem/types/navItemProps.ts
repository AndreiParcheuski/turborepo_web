import { ExternalLink } from '@/shared//types/externalLink';
import { InternalMenuItem } from '@/shared//types/internalMenuItem';
import { RelativeMenuItem } from '@/shared//types/relativeMenuItem';
import { SocialMenuItem } from '@/shared/types/socialMenuItem';

export type NavItemTypeProps =
  | InternalMenuItem
  | RelativeMenuItem
  | ExternalLink
  | SocialMenuItem;

export interface NavItemProps {
  item: NavItemTypeProps;
  withIcon?: boolean;
  itemClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
  onClick?: () => void;
}

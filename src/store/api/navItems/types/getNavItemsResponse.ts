import { ButtonMenuItems } from '@/shared//types/buttonMenuItem';
import { ExternalLink } from '@/shared//types/externalLink';
import {
  InternalMenuItem,
  InternalMenuItems
} from '@/shared//types/internalMenuItem';
import { RelativeMenuItems } from '@/shared//types/relativeMenuItem';
import { SocialMenuItems } from '@/shared//types/socialMenuItem';

export default interface GetNavItemsResponse {
  item: {
    global_navigation: InternalMenuItems;
    main_navigation: InternalMenuItems;
    other_sports: InternalMenuItems;
    pinned_items: RelativeMenuItems;
    promotional_item?: InternalMenuItem | ExternalLink;
    follow_us: SocialMenuItems;
    support: InternalMenuItems;
    download_our_apps: ButtonMenuItems;
    side_menu___main_navigation: InternalMenuItems;
    side_menu___other_sports: InternalMenuItems;
    side_menu___settings: InternalMenuItems;
    copyright: {
      text: string;
    };
  };
}

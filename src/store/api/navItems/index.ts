import GetNavItemsParams from '@/shared/types/getNavItemsParams';

import GetNavItemsResponse from './types/getNavItemsResponse';
import { baseApi } from '../base';

const ENDPOINTS = {
  NAV_ITEMS: '/domain/items/configuration/navigation_management_poc'
};

const navItemsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNavItems: build.query<GetNavItemsResponse, GetNavItemsParams>({
      query: (arg = { regionLang: 'default' }) => {
        const lang = arg.regionLang?.toLowerCase();

        return {
          url: `${ENDPOINTS.NAV_ITEMS}?desiredLanguage=${lang}&filterByLanguage=${lang}&depth=4`
        };
      }
      /*
      TODO remove unneeded logic
      Part to send different responses ssr (Google bots) and csr
      Was developed for 'links visibility feature'
      transformResponse: (response: GetNavItemsResponse, meta, arg: GetNavItemsParams) => {
        if (arg.ssrExtraOptions?.currentPage) {
          const topCategory = arg.ssrExtraOptions.currentPage[0];

          const newPinnedItems = response.item.pinned_items.filter((item) => {
            const url = getMenuItemUrl('', item);

            return url.includes(topCategory);
          });

          const newResponse = {
            item: {
              ...response.item,
              pinned_items: newPinnedItems,
            },
          };

          return newResponse;
        }
        return response;
      },
       */
    })
  }),
  overrideExisting: false
});

export const { useGetNavItemsQuery } = navItemsApi;

// export endpoints for use in SSR
export const { getNavItems } = navItemsApi.endpoints;

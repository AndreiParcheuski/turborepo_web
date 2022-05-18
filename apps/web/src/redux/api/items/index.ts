import { baseApi } from '../base';

const itemsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getItems: build.query<
    string[], void
    >({ query: () => ({ url: 'items.json' }) }),
  }),
  overrideExisting: false,
});

export const { useGetItemsQuery } = itemsApi;

// export endpoints for use in SSR
export const { getItems } = itemsApi.endpoints;

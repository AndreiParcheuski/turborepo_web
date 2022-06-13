import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_KONTENT_ADAPTER_URL ||
      process.env.REACT_APP_TEST ||
      process.env.PARCHA_TEST,
    prepareHeaders: (headers) => {
      headers.set(
        'X-KP-API-Key',
        process.env.NEXT_PUBLIC_KONTENT_ADAPTER_TOKEN as string
      );

      return headers;
    }
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }

    return undefined;
  },
  /*
  TODO remove unneeded logic
  Part to not generate different query cache keys for ssr and csr
  Was developed for 'links visibility feature'
  serializeQueryArgs: ({
    queryArgs,
    endpointName,
  }) => {
    let lastPart: string;

    if (typeof queryArgs === 'object') {
      if (queryArgs.params?.ssrExtraOptions) {
        const {
          params: {
            // This way ssrExtraOptions prop is not used in building query cache key
            ssrExtraOptions,
            ...restParams
          },
        } = queryArgs;

        lastPart = JSON.stringify(restParams);
      } else {
        lastPart = JSON.stringify(queryArgs.params);
      }
    } else {
      lastPart = queryArgs;
    }

    return `${endpointName}${lastPart}`;
  },
  */
  endpoints: () => ({})
});

export const {
  util: { getRunningOperationPromises }
} = baseApi;

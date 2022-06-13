import { InternalMenuItem } from '@/shared/types/internalMenuItem';

export const getUrlSlug = (menuItem: InternalMenuItem) => {
  const { redirection_target: redirectionTarget } = menuItem;

  return redirectionTarget && redirectionTarget.url_slug
    ? `/${JSON.parse(redirectionTarget.url_slug)[0]}`
    : '';
};

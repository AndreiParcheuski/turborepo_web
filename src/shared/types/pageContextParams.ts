import { ParsedUrlQuery } from 'querystring';

export interface PageContextParams extends ParsedUrlQuery {
  regionLang: string;
  page: string[];
}

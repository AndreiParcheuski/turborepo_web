import { defaultMeta } from '../constants/defaultMeta';

export type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

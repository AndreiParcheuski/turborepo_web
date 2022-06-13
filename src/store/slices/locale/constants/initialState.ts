import { LocaleState } from '../types/localeState';

export const initialState: LocaleState = {
  locale: '',
  isArabic: false,
  process: JSON.stringify(process.env)
};

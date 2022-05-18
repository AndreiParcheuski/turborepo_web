import { createWrapper } from 'next-redux-wrapper';

import { AppStore } from './types/appStore';
import { makeStore } from './store';

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

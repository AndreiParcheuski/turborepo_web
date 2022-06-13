import { createWrapper } from 'next-redux-wrapper';

import { makeStore } from './store';
import { AppStore } from './types/appStore';

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

import { NAVIGATOR } from './types';

export const navigator = {
  onPush: route => ({ type: NAVIGATOR.PUSHED, payload: route }),
  onPop: () => ({ type: NAVIGATOR.POPPED }),
  onJump: route => ({ type: NAVIGATOR.JUMPED, payload: route }),
};

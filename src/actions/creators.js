import { NAVIGATOR } from './types';
/**
 * Navigator actions: push, pop and jump
 *  jump is like push however it will change
 *  the state without any view transition/animation.
 *
 *  Try using it to see the difference.
 */
export const navigator = {
  onPush: route => ({ type: NAVIGATOR.PUSHED, payload: route }),
  onPop: () => ({ type: NAVIGATOR.POPPED }),
  onJump: route => ({ type: NAVIGATOR.JUMPED, payload: route }),
};

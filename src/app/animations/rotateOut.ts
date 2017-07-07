import {animate, animation, keyframes, style} from '@angular/animations';

export const rotateOut = animation([animate(
    '1s', keyframes([
      style({transformOrigin: 'center', opacity: 1, offset: 0}), style({
        transformOrigin: 'center',
        transform: 'rotate3d(0, 0, 1, 200deg)',
        opacity: 0,
        offset: 1
      })
    ]))]);

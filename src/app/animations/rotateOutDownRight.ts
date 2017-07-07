import {animate, animation, keyframes, style} from '@angular/animations';

export const rotateOutDownRight = animation([animate(
    '1s', keyframes([
      style({transformOrigin: 'right bottom', opacity: 1, offset: 0}), style({
        transformOrigin: 'right bottom',
        transform: 'rotate3d(0, 0, 1, -45deg)',
        opacity: 0,
        offset: 1
      })
    ]))]);

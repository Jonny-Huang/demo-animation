import {animate, animation, keyframes, style} from '@angular/animations';

export const rotateOutDownLeft = animation([animate(
    '1s', keyframes([
      style({transformOrigin: 'left bottom', opacity: 1, offset: 0}), style({
        transformOrigin: 'left bottom',
        transform: 'rotate3d(0, 0, 1, 45deg)',
        opacity: 0,
        offset: 1
      })
    ]))]);

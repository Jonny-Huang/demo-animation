import {animate, animation, keyframes, style} from '@angular/animations';

export const zoomOutRight = animation([animate(
    '1s', keyframes([
      style({
        transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
        opacity: 1,
        offset: 0.4
      }),
      style({
        transform: 'scale(.1) translate3d(2000px, 0, 0)',
        transformOrigin: 'right center',
        opacity: 0,
        offset: 1
      })
    ]))]);

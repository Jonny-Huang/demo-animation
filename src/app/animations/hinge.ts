import {animate, animation, keyframes, style} from '@angular/animations';

export const hinge = animation([animate(
    '1s', keyframes([
      style({
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        offset: 0
      }),
      style({
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        transform: 'rotate3d(0, 0, 1, 80deg)',
        offset: 0.2
      }),
      style({
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        transform: 'rotate3d(0, 0, 1, 60deg)',
        opacity: 1,
        offset: 0.4
      }),
      style({
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        transform: 'rotate3d(0, 0, 1, 80deg)',
        offset: 0.6
      }),
      style({
        transformOrigin: 'top left',
        animationTimingFunction: 'ease-in-out',
        transform: 'rotate3d(0, 0, 1, 60deg)',
        opacity: 1,
        offset: 0.8
      }),
      style(
          {transform: 'translate3d(0, 700px, 0)', opacity: 0, offset: 1})
    ]))]);

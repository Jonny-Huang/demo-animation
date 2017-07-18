import {animate, animation, keyframes, style} from '@angular/animations';

export const flip = animation([animate(
    '1s', keyframes([
      style({
        animationTimingFunction: 'ease-out',
        transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
        offset: 0
      }),
      style({
        animationTimingFunction: 'ease-out',
        transform:
            'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
        offset: 0.4
      }),
      style({
        animationTimingFunction: 'ease-in',
        transform:
            'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
        offset: 0.5
      }),
      style({
        animationTimingFunction: 'ease-in',
        transform: 'perspective(400px) scale3d(.95, .95, .95)',
        offset: 0.8
      }),
      style({
        animationTimingFunction: 'ease-in',
        transform: 'perspective(400px)',
        offset: 1
      })
    ]))]);

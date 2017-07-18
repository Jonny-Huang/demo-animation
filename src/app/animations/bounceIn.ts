import {animate, animation, keyframes, style, transition} from '@angular/animations';

export const bounceIn = animation([animate(
    '1s', keyframes([
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(.3, .3, .3)',
        opacity: 0,
        offset: 0
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(1.1, 1.1, 1.1)',
        offset: 0.2
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(.9, .9, .9)',
        offset: 0.4
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(1.03, 1.03, 1.03)',
        opacity: 1,
        offset: 0.6
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(.97, .97, .97)',
        offset: 0.8
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'scale3d(1, 1, 1)',
        opacity: 1,
        offset: 1
      })
    ]))]);

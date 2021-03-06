import {animate, animation, keyframes, style, transition} from '@angular/animations';

export const bounceInDown = animation([animate(
    '1s', keyframes([
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'translate3d(0, -3000px, 0)',
        opacity: 0,
        offset: 0
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'translate3d(0, 25px, 0)',
        opacity: 1,
        offset: 0.6
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'translate3d(0, -10px, 0)',
        offset: 0.75
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'translate3d(0, 5px, 0)',
        offset: 0.9
      }),
      style({
        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        transform: 'none',
        offset: 1
      })
    ]))]);

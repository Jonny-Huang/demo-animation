import {animate, animation, keyframes, style} from '@angular/animations';

export const zoomOutUp = animation([animate(
    '1s', keyframes([
      style({
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
        opacity: 1,
        offset: 0.4
      }),
      style({
        transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
        transformOrigin: 'center bottom',
        opacity: 0,
        offset: 1
      })
    ]))]);

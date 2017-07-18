import {animate, animation, keyframes, style} from '@angular/animations';

export const fadeOutLeft = animation([animate(
    '1s', keyframes([
      style({opacity: 1, offset: 0}),
      style(
          {transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 1})
    ]))]);

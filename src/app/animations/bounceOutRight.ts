import {animate, animation, keyframes, style, transition} from '@angular/animations';

export const bounceOutRight = animation([animate(
    '1s', keyframes([
      style({transform: 'translate3d(-20px, 0, 0)', opacity: 1, offset: 0.2}),
      style(
          {transform: 'translate3d(2000px, 0, 0)', opacity: 0, offset: 1})
    ]))]);

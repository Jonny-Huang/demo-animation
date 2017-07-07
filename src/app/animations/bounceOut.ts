import {animate, animation, keyframes, style, transition} from '@angular/animations';

export const bounceOut = animation([animate(
    '1s', keyframes([
      style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
      style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1, offset: 0.5}),
      style({transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1, offset: 0.55}),
      style({transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 1})
    ]))]);

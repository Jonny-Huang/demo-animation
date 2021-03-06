import {animate, animation, keyframes, style} from '@angular/animations';

export const fadeInUp = animation([animate(
    '1s', keyframes([
      style({transform: 'translate3d(0, 100%, 0)', opacity: 0, offset: 0}),
      style({transform: 'none', opacity: 1, offset: 1})
    ]))]);

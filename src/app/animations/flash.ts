import {animate, animation, keyframes, style} from '@angular/animations';

export const flash = animation([animate(
    '1s', keyframes([
      style({opacity: 1, offset: 0}), style({opacity: 0, offset: 0.25}),
      style({opacity: 1, offset: 0.5}), style({opacity: 0, offset: 0.75}),
      style({opacity: 1, offset: 1})
    ]))]);

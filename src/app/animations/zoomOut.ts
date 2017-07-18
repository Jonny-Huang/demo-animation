import {animate, animation, keyframes, style} from '@angular/animations';

export const zoomOut = animation([animate(
    '1s', keyframes([
      style({opacity: 1, offset: 0}),
      style({transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 0.5}),
      style({opacity: 0, offset: 1})
    ]))]);

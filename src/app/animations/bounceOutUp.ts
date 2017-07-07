import {animate, animation, keyframes, style, transition} from '@angular/animations';

export const bounceOutUp = animation([animate(
    '1s', keyframes([
      style({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
      style({transform: 'translate3d(0, 20px, 0)', opacity: 1, offset: 0.4}),
      style({transform: 'translate3d(0, 20px, 0)', opacity: 1, offset: 0.45}),
      style({
        transform: 'translate3d(0, -2000px, 0)',
        opacity: 0,
        offset: 1
      })
    ]))]);

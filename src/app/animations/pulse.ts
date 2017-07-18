import {animate, animation, keyframes, style} from '@angular/animations';

export const pulse = animation(
    [animate('1s', keyframes([
               style({transform: 'scale3d(1, 1, 1)', offset: 0}),
               style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
               style({transform: 'scale3d(1, 1, 1)', offset: 1})
             ]))]);

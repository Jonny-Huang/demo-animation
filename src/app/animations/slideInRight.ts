import {animate, animation, keyframes, style} from '@angular/animations';

export const slideInRight = animation(
    [animate('1s', keyframes([
               style({
                 transform: 'translate3d(100%, 0, 0)',
                 visibility: 'visible',
                 offset: 0
               }),
               style({transform: 'translate3d(0, 0, 0)', offset: 1})
             ]))]);

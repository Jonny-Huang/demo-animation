import {animate, animation, keyframes, style} from '@angular/animations';

export const slideOutDown = animation(
    [animate('1s', keyframes([
               style({transform: 'translate3d(0, 0, 0)', offset: 0}), style({
                 transform: 'translate3d(0, 100%, 0)',
                 visibility: 'hidden',
                 offset: 1
               })
             ]))]);

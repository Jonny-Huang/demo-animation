import {animate, animation, keyframes, style} from '@angular/animations';

export const rollOut = animation(
    [animate('1s', keyframes([
               style({opacity: 1, offset: 0}), style({
                 transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
                 opacity: 0,
                 offset: 1
               })
             ]))]);

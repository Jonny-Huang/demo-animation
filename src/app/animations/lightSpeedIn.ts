import {animate, animation, keyframes, style} from '@angular/animations';

export const lightSpeedIn = animation(
    [animate('1s ease-out', keyframes([
               style({
                 transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                 opacity: 0,
                 offset: 0
               }),
               style({transform: 'skewX(20deg)', opacity: 1, offset: 0.6}),
               style({transform: 'skewX(-5deg)', opacity: 1, offset: 0.8}),
               style({transform: 'none', opacity: 1, offset: 1})
             ]))]);

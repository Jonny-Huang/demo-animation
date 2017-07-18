import {animate, animation, keyframes, style} from '@angular/animations';

export const lightSpeedOut =
    animation([animate('1s ease-in', keyframes([
                         style({opacity: 1, offset: 0}), style({
                           transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                           opacity: 0,
                           offset: 1
                         })
                       ]))]);

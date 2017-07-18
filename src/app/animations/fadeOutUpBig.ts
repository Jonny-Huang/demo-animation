import {animate, animation, keyframes, style} from '@angular/animations';

export const fadeOutUpBig =
    animation([animate('1s', keyframes([
                         style({opacity: 1, offset: 0}), style({
                           transform: 'translate3d(0, -2000px, 0)',
                           opacity: 0,
                           offset: 1
                         })
                       ]))]);

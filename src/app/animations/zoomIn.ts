import {animate, animation, keyframes, style} from '@angular/animations';

export const zoomIn = animation(
    [animate('1s', keyframes([
               style({transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 0}),
               style({opacity: 1, offset: 0.5})
             ]))]);

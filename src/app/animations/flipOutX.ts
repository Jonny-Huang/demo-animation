import {animate, animation, keyframes, style} from '@angular/animations';

export const flipOutX = animation(
    [animate('1s', keyframes([
               style({transform: 'perspective(400px)', offset: 0}), style({
                 transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                 opacity: 1,
                 offset: 0.3
               }),
               style({
                 transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                 opacity: 0,
                 offset: 1
               })
             ]))]);

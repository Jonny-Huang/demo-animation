import {animate, animation, keyframes, style} from '@angular/animations';

export const flipOutY = animation(
    [animate('1s', keyframes([
               style({transform: 'perspective(400px)', offset: 0}), style({
                 transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
                 opacity: 1,
                 offset: 0.3
               }),
               style({
                 transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                 opacity: 0,
                 offset: 1
               })
             ]))]);

import {animate, animation, keyframes, style} from '@angular/animations';

export const flipInX = animation(
    [animate('1s', keyframes([
               style({
                 animationTimingFunction: 'ease-in',
                 transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                 opacity: 0,
                 offset: 0
               }),
               style({
                 animationTimingFunction: 'ease-in',
                 transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                 offset: 0.4
               }),
               style({
                 transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
                 opacity: 1,
                 offset: 0.6
               }),
               style({
                 transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
                 offset: 0.8
               }),
               style({transform: 'perspective(400px)', offset: 1})
             ]))]);

import {animate, animation, keyframes, style} from '@angular/animations';

export const jackInTheBox = animation(
    [animate('1s', keyframes([
               style({
                 transformOrigin: 'center bottom',
                 transform: 'scale(0.1) rotate(30deg)',
                 opacity: 0,
                 offset: 0
               }),
               style({transform: 'rotate(-10deg)', offset: 0.5}),
               style({transform: 'rotate(3deg)', offset: 0.7}),
               style({transform: 'scale(1)', opacity: 1, offset: 1})
             ]))]);

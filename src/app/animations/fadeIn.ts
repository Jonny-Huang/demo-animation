import {animate, animation, keyframes, style} from '@angular/animations';

export const fadeIn = animation([animate(
    '1s',
    keyframes(
        [style({opacity: 0, offset: 0}), style({opacity: 0, offset: 1})]))]);

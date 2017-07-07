import {animate, animation, keyframes, style} from '@angular/animations';

export const fadeOut = animation([animate(
    '1s',
    keyframes(
        [style({opacity: 1, offset: 0}), style({opacity: 0, offset: 1})]))]);

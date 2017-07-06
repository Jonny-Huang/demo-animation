import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', opacity: 1, offset: 0.4 }),
  style({ transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', transformOrigin: 'center bottom', opacity: 0, offset: 1 })
]));

export const zoomOutDown = transition('* => zoomOutDown', _animate);

// @keyframes zoomOutDown {
//   40% {
//     opacity: 1;
//     transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
//     animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
//   }
//   to {
//     opacity: 0;
//     transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
//     transform-origin: center bottom;
//     animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
//   }
// }

// .zoomOutDown {
//   animation-name: zoomOutDown;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)', opacity: 0, offset: 0 }),
  style({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)', opacity: 1, offset: 0.6 })
]));

export const zoomInDown = transition('* => zoomInDown', _animate);

// @keyframes zoomInDown {
//   from {
//     opacity: 0;
//     transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
//     animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
//   }
//   60% {
//     opacity: 1;
//     transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
//     animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
//   }
// }

// .zoomInDown {
//   animation-name: zoomInDown;
// }

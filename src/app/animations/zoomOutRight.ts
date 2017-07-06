import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: 1, offset: 0.4 }),
  style({ transform: 'scale(.1) translate3d(2000px, 0, 0)', transformOrigin: 'right center', opacity: 0, offset: 1 })
]));

export const zoomOutRight = transition('* => zoomOutRight', _animate);

// @keyframes zoomOutRight {
//   40% {
//     opacity: 1;
//     transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
//   }
//   to {
//     opacity: 0;
//     transform: scale(.1) translate3d(2000px, 0, 0);
//     transform-origin: right center;
//   }
// }

// .zoomOutRight {
//   animation-name: zoomOutRight;
// }

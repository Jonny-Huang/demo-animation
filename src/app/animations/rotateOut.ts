import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'center', opacity: 1, offset: 0 }),
  style({ transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', opacity: 0, offset: 1 })
]));

export const rotateOut = transition('* => rotateOut', _animate);

// @keyframes rotateOut {
//   from {
//     transform-origin: center;
//     opacity: 1;
//   }
//   to {
//     transform-origin: center;
//     transform: rotate3d(0, 0, 1, 200deg);
//     opacity: 0;
//   }
// }

// .rotateOut {
//   animation-name: rotateOut;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)', opacity: 0, offset: 0 }),
  style({ transformOrigin: 'right bottom', transform: 'none', opacity: 1, offset: 1 })
]));

export const rotateInUpRight = transition('* => rotateInUpRight', _animate);

// @keyframes rotateInUpRight {
//   from {
//     transform-origin: right bottom;
//     transform: rotate3d(0, 0, 1, -90deg);
//     opacity: 0;
//   }
//   to {
//     transform-origin: right bottom;
//     transform: none;
//     opacity: 1;
//   }
// }

// .rotateInUpRight {
//   animation-name: rotateInUpRight;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'right bottom', opacity: 1, offset: 0 }),
  style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, offset: 1 })
]));

export const rotateOutUpRight = transition('* => rotateOutUpRight', _animate);

// @keyframes rotateOutUpRight {
//   from {
//     transform-origin: right bottom;
//     opacity: 1;
//   }
//   to {
//     transform-origin: right bottom;
//     transform: rotate3d(0, 0, 1, 90deg);
//     opacity: 0;
//   }
// }

// .rotateOutUpRight {
//   animation-name: rotateOutUpRight;
// }

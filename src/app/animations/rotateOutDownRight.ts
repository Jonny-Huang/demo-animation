import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'right bottom', opacity: 1, offset: 0 }),
  style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 1 })
]));

export const rotateOutDownRight = transition('* => rotateOutDownRight', _animate);

// @keyframes rotateOutDownRight {
//   from {
//     transform-origin: right bottom;
//     opacity: 1;
//   }
//   to {
//     transform-origin: right bottom;
//     transform: rotate3d(0, 0, 1, -45deg);
//     opacity: 0;
//   }
// }

// .rotateOutDownRight {
//   animation-name: rotateOutDownRight;
// }

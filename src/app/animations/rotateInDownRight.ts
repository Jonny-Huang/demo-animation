import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 0 }),
  style({ transformOrigin: 'right bottom', transform: 'none', opacity: 1, offset: 1 })
]));

export const rotateInDownRight = transition('* => rotateInDownRight', _animate);

// @keyframes rotateInDownRight {
//   from {
//     transform-origin: right bottom;
//     transform: rotate3d(0, 0, 1, 45deg);
//     opacity: 0;
//   }
//   to {
//     transform-origin: right bottom;
//     transform: none;
//     opacity: 1;
//   }
// }

// .rotateInDownRight {
//   animation-name: rotateInDownRight;
// }

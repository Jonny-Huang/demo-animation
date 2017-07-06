import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'left bottom', opacity: 1, offset: 0 }),
  style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: 0, offset: 1 })
]));

export const rotateOutDownLeft = transition('* => rotateOutDownLeft', _animate);

// @keyframes rotateOutDownLeft {
//   from {
//     transform-origin: left bottom;
//     opacity: 1;
//   }
//   to {
//     transform-origin: left bottom;
//     transform: rotate3d(0, 0, 1, 45deg);
//     opacity: 0;
//   }
// }

// .rotateOutDownLeft {
//   animation-name: rotateOutDownLeft;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', opacity: 0, offset: 0 }),
  style({ transformOrigin: 'center', transform: 'none', opacity: 1, offset: 1 })
]));

export const rotateIn = transition('* => rotateIn', _animate);

// @keyframes rotateIn {
//   from {
//     transform-origin: center;
//     transform: rotate3d(0, 0, 1, -200deg);
//     opacity: 0;
//   }
//   to {
//     transform-origin: center;
//     transform: none;
//     opacity: 1;
//   }
// }

// .rotateIn {
//   animation-name: rotateIn;
// }

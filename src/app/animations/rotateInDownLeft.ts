import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', opacity: 0, offset: 0 }),
  style({ transformOrigin: 'left bottom', transform: 'none', opacity: 1, offset: 1 })
]));

export const rotateInDownLeft = transition('* => rotateInDownLeft', _animate);

// @keyframes rotateInDownLeft {
//   from {
//     transform-origin: left bottom;
//     transform: rotate3d(0, 0, 1, -45deg);
//     opacity: 0;
//   }
//   to {
//     transform-origin: left bottom;
//     transform: none;
//     opacity: 1;
//   }
// }

// .rotateInDownLeft {
//   animation-name: rotateInDownLeft;
// }

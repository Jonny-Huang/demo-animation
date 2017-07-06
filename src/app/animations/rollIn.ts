import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0, offset: 0 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const rollIn = transition('* => rollIn', _animate);

// @keyframes rollIn {
//   from {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
//   }
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }

// .rollIn {
//   animation-name: rollIn;
// }

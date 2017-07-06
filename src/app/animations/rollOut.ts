import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0, offset: 1 })
]));

export const rollOut = transition('* => rollOut', _animate);

// @keyframes rollOut {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
//   }
// }

// .rollOut {
//   animation-name: rollOut;
// }

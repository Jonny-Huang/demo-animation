import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ opacity: 0, offset: 1 })
]));

export const fadeOut = transition('* => fadeOut', _animate);

// @keyframes fadeOut {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// }

// .fadeOut {
//   animation-name: fadeOut;
// }

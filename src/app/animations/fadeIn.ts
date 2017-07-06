import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 0, offset: 0 }),
  style({ opacity: 0, offset: 1 })
]));

export const fadeIn = transition('* => fadeIn', _animate);

// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }

// .fadeIn {
//   animation-name: fadeIn;
// }

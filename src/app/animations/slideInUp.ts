import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
]));

export const slideInUp = transition('* => slideInUp', _animate);

// @keyframes slideInUp {
//   from {
//     transform: translate3d(0, 100%, 0);
//     visibility: visible;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInUp {
//   animation-name: slideInUp;
// }

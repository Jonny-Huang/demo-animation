import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
]));

export const slideInLeft = transition('* => slideInLeft', _animate);

// @keyframes slideInLeft {
//   from {
//     transform: translate3d(-100%, 0, 0);
//     visibility: visible;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInLeft {
//   animation-name: slideInLeft;
// }

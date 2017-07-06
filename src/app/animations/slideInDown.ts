import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, -100%, 0)', visibility: 'visible', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
]));

export const slideInDown = transition('* => slideInDown', _animate);

// @keyframes slideInDown {
//   from {
//     transform: translate3d(0, -100%, 0);
//     visibility: visible;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInDown {
//   animation-name: slideInDown;
// }

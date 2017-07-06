import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
]));

export const slideInRight = transition('* => slideInRight', _animate);

// @keyframes slideInRight {
//   from {
//     transform: translate3d(100%, 0, 0);
//     visibility: visible;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// .slideInRight {
//   animation-name: slideInRight;
// }

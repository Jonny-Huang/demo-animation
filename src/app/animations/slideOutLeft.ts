import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden', offset: 1 })
]));

export const slideOutLeft = transition('* => slideOutLeft', _animate);

// @keyframes slideOutLeft {
//   from {
//     transform: translate3d(0, 0, 0);
//   }
//   to {
//     visibility: hidden;
//     transform: translate3d(-100%, 0, 0);
//   }
// }

// .slideOutLeft {
//   animation-name: slideOutLeft;
// }

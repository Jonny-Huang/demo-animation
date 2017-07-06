import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, 100%, 0)', opacity: 0, offset: 0 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const fadeInUp = transition('* => fadeInUp', _animate);

// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translate3d(0, 100%, 0);
//   }
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }

// .fadeInUp {
//   animation-name: fadeInUp;
// }

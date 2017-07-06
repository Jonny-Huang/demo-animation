import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(-100%, 0, 0)', opacity: 0, offset: 0 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const fadeInLeft = transition('* => fadeInLeft', _animate);

// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }

// .fadeInLeft {
//   animation-name: fadeInLeft;
// }

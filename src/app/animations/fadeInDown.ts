import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, -100%, 0)', opacity: 0, offset: 0 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const fadeInDown = transition('* => fadeInDown', _animate);

// @keyframes fadeInDown {
//   from {
//     opacity: 0;
//     transform: translate3d(0, -100%, 0);
//   }
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }

// .fadeInDown {
//   animation-name: fadeInDown;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(-2000px, 0, 0)', opacity: 0, offset: 0 }),
  style({ transform: 'none', opacity: 1, offset: 1 })
]));

export const fadeInLeftBig = transition('* => fadeInLeftBig', _animate);

// @keyframes fadeInLeftBig {
//   from {
//     opacity: 0;
//     transform: translate3d(-2000px, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }

// .fadeInLeftBig {
//   animation-name: fadeInLeftBig;
// }

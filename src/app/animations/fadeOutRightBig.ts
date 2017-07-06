import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'translate3d(2000px, 0, 0)', opacity: 0, offset: 1 })
]));

export const fadeOutRightBig = transition('* => fadeOutRightBig', _animate);

// @keyframes fadeOutRightBig {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(2000px, 0, 0);
//   }
// }

// .fadeOutRightBig {
//   animation-name: fadeOutRightBig;
// }

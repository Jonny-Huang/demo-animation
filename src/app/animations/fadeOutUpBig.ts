import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'translate3d(0, -2000px, 0)', opacity: 0, offset: 1 })
]));

export const fadeOutUpBig = transition('* => fadeOutUpBig', _animate);

// @keyframes fadeOutUpBig {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(0, -2000px, 0);
//   }
// }

// .fadeOutUpBig {
//   animation-name: fadeOutUpBig;
// }

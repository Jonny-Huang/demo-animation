import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ opacity: 1, offset: 0 }),
  style({ transform: 'translate3d(0, -100%, 0)', opacity: 0, offset: 1 })
]));

export const fadeOutUp = transition('* => fadeOutUp', _animate);

// @keyframes fadeOutUp {
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(0, -100%, 0);
//   }
// }

// .fadeOutUp {
//   animation-name: fadeOutUp;
// }

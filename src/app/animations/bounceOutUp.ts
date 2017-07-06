import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
  style({ transform: 'translate3d(0, 20px, 0)', opacity: 1, offset: 0.4 }),
  style({ transform: 'translate3d(0, 20px, 0)', opacity: 1, offset: 0.45 }),
  style({ transform: 'translate3d(0, -2000px, 0)', opacity: 0, offset: 1 })
]));

export const bounceOutUp = transition('* => bounceOutUp', _animate);

// @keyframes bounceOutUp {
//   20% {
//     transform: translate3d(0, -10px, 0);
//   }
//   40%,
//   45% {
//     opacity: 1;
//     transform: translate3d(0, 20px, 0);
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(0, -2000px, 0);
//   }
// }

// .bounceOutUp {
//   animation-name: bounceOutUp;
// }

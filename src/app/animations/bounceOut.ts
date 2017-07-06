import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1, offset: 0.5 }),
  style({ transform: 'scale3d(1.1, 1.1, 1.1)', opacity: 1, offset: 0.55 }),
  style({ transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 1 })
]));

export const bounceOut = transition('* => bounceOut', _animate);

// @keyframes bounceOut {
//   20% {
//     transform: scale3d(.9, .9, .9);
//   }
//   50%,
//   55% {
//     opacity: 1;
//     transform: scale3d(1.1, 1.1, 1.1);
//   }
//   to {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
// }

// .bounceOut {
//   animation-name: bounceOut;
// }

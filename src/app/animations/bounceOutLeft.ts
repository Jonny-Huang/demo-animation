import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ transform: 'translate3d(20px, 0, 0)', opacity: 1, offset: 0.2 }),
  style({ transform: 'translate3d(-2000px, 0, 0)', opacity: 0, offset: 1 })
]));

export const bounceOutLeft = transition('* => bounceOutLeft', _animate);

// @keyframes bounceOutLeft {
//   20% {
//     opacity: 1;
//     transform: translate3d(20px, 0, 0);
//   }
//   to {
//     opacity: 0;
//     transform: translate3d(-2000px, 0, 0);
//   }
// }

// .bounceOutLeft {
//   animation-name: bounceOutLeft;
// }

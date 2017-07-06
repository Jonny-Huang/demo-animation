import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(3000px, 0, 0)', opacity: 0, offset: 0 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(-25px, 0, 0)', opacity: 1, offset: 0.6 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'none', offset: 1 })
]));

export const bounceInRight = transition('* => bounceInRight', _animate);

// @keyframes bounceInRight {
//   from,
//   60%,
//   75%,
//   90%,
//   to {
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }
//   from {
//     opacity: 0;
//     transform: translate3d(3000px, 0, 0);
//   }
//   60% {
//     opacity: 1;
//     transform: translate3d(-25px, 0, 0);
//   }
//   75% {
//     transform: translate3d(10px, 0, 0);
//   }
//   90% {
//     transform: translate3d(-5px, 0, 0);
//   }
//   to {
//     transform: none;
//   }
// }

// .bounceInRight {
//   animation-name: bounceInRight;
// }

import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
  style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
  style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
  style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
  style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
]));

export const bounce = transition('* => bounce', _animate);

// @keyframes bounce {
//   from,
//   20%,
//   53%,
//   80%,
//   to {
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//     transform: translate3d(0, 0, 0);
//   }
//   40%,
//   43% {
//     animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
//     transform: translate3d(0, -30px, 0);
//   }
//   70% {
//     animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
//     transform: translate3d(0, -15px, 0);
//   }
//   90% {
//     transform: translate3d(0, -4px, 0);
//   }
// }

// .bounce {
//   animation-name: bounce;
//   transform-origin: center bottom;
// }

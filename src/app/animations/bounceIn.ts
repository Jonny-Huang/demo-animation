import { style, animate, transition, keyframes } from '@angular/animations';

const _animate = animate('1s', keyframes([
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(.3, .3, .3)', opacity: 0, offset: 0 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(1.03, 1.03, 1.03)', opacity: 1, offset: 0.6 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
  style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1 })
]));

export const bounceIn = transition('* => bounceIn', _animate);

// @keyframes bounceIn {
//   from,
//   20%,
//   40%,
//   60%,
//   80%,
//   to {
//     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
//   }
//   0% {
//     opacity: 0;
//     transform: scale3d(.3, .3, .3);
//   }
//   20% {
//     transform: scale3d(1.1, 1.1, 1.1);
//   }
//   40% {
//     transform: scale3d(.9, .9, .9);
//   }
//   60% {
//     opacity: 1;
//     transform: scale3d(1.03, 1.03, 1.03);
//   }
//   80% {
//     transform: scale3d(.97, .97, .97);
//   }
//   to {
//     opacity: 1;
//     transform: scale3d(1, 1, 1);
//   }
// }

// .bounceIn {
//   animation-name: bounceIn;
// }
